export default class Youtube {
  constructor (token) {
    this.token = token
    this.broadcasts = []
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
    let data = new FormData()
    data.append('vidoe', blob)
    data.append('snippet', {
      'title': 'Screen Recorder Pro Recording - ' + new Date(),
      'description': 'This screen recording was created with Screen Recorder Pro https://recorder.jcompsolu.com'
    })
    data.append('status', {
      "privacyStatus": "private"
    })
    console.log('DATA', data)
    const req = await this.makeRequest('https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=status', 'POST', data)
    console.log(req)
  }
  async createNewLiveStream () {
    try {
    const broadcast = await this.createBroadcast()
    const livestream = await this.makeRequest('https://www.googleapis.com/youtube/v3/liveStreams?part=cdn&part=snippet', 'POST', {
      "snippet": {
        "title": "Getting Started With Screen Recorder"
      },
      "cdn": {
        "frameRate": "variable",
        "ingestionType": "dash",
        "resolution": "variable"
      }
    })
      console.log([broadcast, livestream])
      const bind = await this.bindBroadCast(broadcast.id, livestream.id)
      console.log(bind)
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
      console.log(this.broadcasts)
      return results
    } catch (e) {
      console.log(e)
    }
  }
  async createBroadcast () {
    try {
      const res = await this.makeRequest('https://youtube.googleapis.com/youtube/v3/liveBroadcasts?part=contentDetails&part=snippet&part=status','POST',{
      "snippet": {
        "scheduledStartTime": new Date(Date.now()).toISOString(),
        "title": "Getting Started With Screen Recorder"
      },
      "contentDetails": {
        "enableDvr": true,
        "enableAutoStart": true,
        "enableAutoStop": true
      },
      "status": {
        "privacyStatus": "unlisted",
      }
    })
    return res
    } catch (e) {
      console.log(e)
    }
  }
  async bindBroadCast (broadcastId, streamId) {
    const url = `https://www.googleapis.com/youtube/v3/liveBroadcasts/bind?id=${broadcastId}&part=snippet&streamId=${streamId}`
    try {
      const res = await this.makeRequest(url, 'POST', {})
      return res
    } catch (e) {
      console.log(e)
    }
  }
  async endBroadcast() {}
  async makeRequest(url, method, data) {
    try {
      const res = await fetch(url, {
        method: method, // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache',
        headers: {
          Authorization: `Bearer ${this.token}`
        },
        body: JSON.stringify(data)
      })
      const ret = await res.json()
      return ret
    } catch (e) {
      alert('There was an error with the request! Please try agin later.')
    }

  }
}
