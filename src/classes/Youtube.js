import { MPD } from 'dash-manifest-creator'
import { FFmpeg } from '@ffmpeg/ffmpeg';
import { fetchFile, toBlobURL } from '@ffmpeg/util';
export default class Youtube {
  startNumber;
  livestream;
  ffmpegRef;
  constructor (token, mime = 'video/webm; codecs="opus, vp09.00.10.08"') {
    this.token = token
    this.broadcasts = []
    this.baseUrl = 'https://upload.youtube.com/dash_upload'
    this.startNumber = 1
    this.bind = {}
    this.broadcast = {}
    this.livestream = {}
    this.ffmpegRef = new FFmpeg()
    this.mediaSource = new MediaSource()
    this.mime = mime
    this.file = null
    this.sourceBuffer = this.mediaSource.addSourceBuffer(this.mime)
  }
  gup(url, name) {
  name = name.replace(/[/,"\\").replace(/[\]]/,"\\");
  var regexS = "[\\#&]"+name+"=([^&#]*)";
            var regex = new RegExp( regexS );
            var results = regex.exec( url );
            if( results == null )
                return "";
            else
                return results[1];
        }
  async uploadVideo (blob) {
    console.log(blob)
    let data = new FormData()
    let resData = {
        title: 'Screen Recorder Pro Recording - ' + new Date(),
        description: 'This screen recording was created with Screen Recorder Pro https://recorder.jcompsolu.com',
        categoryId: '28'
    }
    data.append('snippet', JSON.stringify(resData))
    //data.append('filename', blob)
    const req = await this.makeRequest('https://youtube.googleapis.com/youtube/v3/videos?part=snippet,id', 'POST', data)
    console.log(req.json())
  }
  //
  async loadFfmpeg() {
    this.sourceBuffer.addEventListener('updateend', function (e) {
      if (!this.sourceBuffer.updating && this.mediaSource.readyState === 'open') {
        this.mediaSource.endOfStream();
      }
    });
    const baseURL = 'https://unpkg.com/@ffmpeg/core-mt@0.12.6/dist/esm'
    const ffmpeg = this.ffmpegRef.current;
    ffmpeg.on('log', ({ message }) => {
        console.log(message);
    });
    // toBlobURL is used to bypass CORS issue, urls with the same
    // domain can be used directly.
    await ffmpeg.load({
        coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
        wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
        workerURL: await toBlobURL(`${baseURL}/ffmpeg-core.worker.js`, 'text/javascript'),
    });
  
    this.setLoaded = true;
    const inputDir = '/input';
    const name = `${crypto.randomUUID()}.webm`
    await ffmpeg.createDir(inputDir);
    const inputFile = `${inputDir}/${name}`;
    this.file = await fetchFile(await toBlobURL(this.mediaSource, this.mime));
    ffmpeg.mount('WORKERFS', { files: [ this.file ]}, inputDir);
  } 
  handleNewData(evt) {

    this.sourceBuffer.appendBuffer(evt.detail);
  }
  async createNewLiveStream () {
    try {
      await this.loadFfmpeg()
      let data = {
        "snippet": {
          "title": "Getting Started With Screen Recorder"
        },
        "cdn": {
          "frameRate": "variable",
          "ingestionType": "dash",
          "resolution": "variable"
        }
      }
      const headers = {
        Authorization: `Bearer ${this.token}`
      }
    this.broadcast = await this.createBroadcast()
    this.livestream = await this.makeRequest('https://www.googleapis.com/youtube/v3/liveStreams?part=cdn&part=snippet', 'POST', JSON.stringify(data), headers)
      this.bind = await this.bindBroadCast(this.broadcast.id, this.livestream.id)
      sessionStorage.setItem("cid", this.livestream.cdn.ingestionInfo.ingestionAddress)
      return this.livestream.cdn.ingestionInfo.streamName
    } catch (e) {
      console.log(e)
    }
  }
  async getBroadcasts () {
    try {
      const res = await fetch('https://www.googleapis.com/youtube/v3/liveBroadcasts?broadcastStatus=all', {
        headers: {
          'Authorization': `Bearer ${this.token}`
        }
      })
      const results = await res.json()
      this.broadcasts = results.items
      return results.items
    } catch (e) {
      console.log(e)
    }
  }
  async createBroadcast () {
    try {
      const title = prompt('Give your stream a title!')
      let data = {
        "snippet": {
          "scheduledStartTime": new Date(Date.now()).toISOString(),
          "title": title
        },
        "contentDetails": {
          "enableDvr": true,
          "enableAutoStart": true,
          "enableAutoStop": true,
          "recordFromStart": true
        },
        "status": {
          "privacyStatus": "unlisted",
          "selfDeclaredMadeForKids": false
        }
      }
      const headers = {
        Authorization: `Bearer ${this.token}`
      }
      const res = await this.makeRequest('https://youtube.googleapis.com/youtube/v3/liveBroadcasts?part=contentDetails&part=snippet&part=status','POST', JSON.stringify(data), headers)
    return res
    } catch (e) {
      console.log(e)
    }
  }
  async bindBroadCast (broadcastId, streamId) {
    const url = `https://www.googleapis.com/youtube/v3/liveBroadcasts/bind?id=${broadcastId}&part=snippet&streamId=${streamId}`
    try {
      const headers = {
        Authorization: `Bearer ${this.token}`
      }
      const res = await this.makeRequest(url, 'POST', JSON.stringify({}), headers)
      return res
    } catch (e) {
      console.log(e)
    }
  }
  async endBroadcast() {}
  async makeRequest(url, method, data, headers ) {
    try {
      const res = await fetch(url, {
        method: method, // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache',
        headers: headers,
        body: data
      })
      const ret = await res.json()
      return ret
    } catch (e) {
      console.log(e.message)
    }

  }
  async uploadDashData (filename, data) {
    const url = sessionStorage.cid+filename
    const formData  = new FormData()
    formData.append('file', data)
    formData.append('url', url)

    const headers = {
    }
    await this.makeRequest('https://screen-recorder-micro.jcompsolu.com/api/stream-to-youtube', 'POST', formData, headers)
  }
  async createDashManifest(initVideo, filename) {
    if(this.startNumber === 1) {
      const cid = sessionStorage.getItem('cid')
      console.log('CID', cid)
      const url = `${cid}media-$Number%09d$.webm`
      const mpd = new MPD(null, document.implementation.createDocument("", "", null))
      mpd.createMpd(initVideo, url, this.startNumber)

      const upload = mpd.getBlob()
      mpd.downloadXML()
      this.uploadDashData(filename,upload)

    } else {
      this.uploadDashData(`media00${this.startNumber}.webm`,initVideo)
    }
    this.startNumber = this.startNumber + 1
  }

  
}
