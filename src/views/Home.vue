<template>
  <div id="app">
    <img alt="Screen Record Pro" src="../assets/logo.svg" class="animate-fade-slow object-contain h-80 w-full">
    <h2 class="text-sm tracking-wide font-medium text-gray-500 uppercase">Free Online Screen Recorder</h2>
    <p class="text-base font-light leading-relaxed mt-0 mb-4 text-gray-800">
    Free online screen recorder by J Computer Solutions LLC that allows you to
    record your screen including microphone audio and save the file to your desktop.
    No download required, use this progressive web app in the browser!
    J Computer Solutions LLC provides the #1 free online screen capture software! Due to current
    browser limitations, this software can only be used on desktop. Please ensure you are on a Windows, MacOS or Linux
    computer using Chrome, Firefox or Safari!
    </p>
    <p class="text-base font-light leading-relaxed mt-0 mb-4 text-gray-800">
     Want to upload your videos to Google Drive? Connect your Google account!
     We don't keep your data when you login and it is not required to use the application. To learn more please visit the <a href="/#/privacy">privacy policy</a>
    </p>
    <h1 class="text-3xl font-large text-gray-500 uppercase">To Date We Have Processed: <strong class="animate-pulse text-3xl font-large text-red-500">{{bytes_processed}}</strong> bytes worth of video data!</h1>
    <t-modal
      header="Email Recording"
      ref="modal"
    >
  <t-input v-model="sendEmail" placeholder="Email Address" name="send-email" />
  <template v-slot:footer>
    <div class="flex justify-between">
      <t-button type="button" @click="$refs.modal.hide()">
        Cancel
      </t-button>
      <t-button type="button" @click="emailFile">
        Send File
      </t-button>
    </div>
  </template>
</t-modal>
<div class="mt-5 mb-5" v-if="!youtube_ready">
   <t-button v-on:click="connectToYoutube" > Connect To Google</t-button>
</div>
<div class="mt-5 mb-5" v-else>
  <t-button v-on:click="toggleYTStream" v-if="!isYtStreaming" v-show="canRecord" class="ml-10"> Start Streaming 🎥</t-button>

  <t-button v-on:click="toggleYTStream" v-else  class="ml-10"> Stop Streaming 🎥</t-button>

</div>
<div class="mt-5 mb-5">
  <t-toggle
              v-if="!isRecording"
              v-model="speechEnabled"
              checkedLabel="Voices On"
              uncheckedLabel="Voices Off"
              :classes="{
                wrapper: 'bg-gray-200 focus:outline-none focus:shadow-outline rounded-sm border-2',
                wrapperChecked: 'bg-gray-200 focus:outline-none focus:shadow-outline rounded-sm border-2',
                button: 'rounded-sm w-6 h-6 bg-white shadow flex items-center justify-center text-gray-800 text-xs',
                buttonChecked: 'rounded-sm w-10 h-6 bg-white shadow flex items-center justify-center text-gray-800 text-xs',
                checkedPlaceholder: 'rounded-sm w-10 h-6 flex items-center justify-center text-gray-500 text-xs',
                uncheckedPlaceholder: 'rounded-sm w-10 h-6 flex items-center justify-center text-gray-500 text-xs'
              }"
            ></t-toggle>
            <div v-if="!isRecording">
              <t-button v-on:click="getStream"  v-show="canRecord" class="ml-10"> Start Recording 🎥</t-button>

            </div>
              <div v-else>
                <t-button v-on:click="stopStream"> Stop Screen Recording ❌ </t-button>
              </div>
      <t-button v-on:click="upload" v-if="uploadReady" class="ml-10">Upload To Youtube 📺</t-button>

      <t-button v-on:click="uploadToDrive" v-if="uploadReady" class="ml-10">Upload To Drive 🗄️</t-button>
      <t-button v-on:click="download" v-if="fileReady" class="ml-10"> Download Recording 🎬</t-button>
    <t-button v-on:click="share" v-if="shareReady" class="ml-10"> Share 🔗</t-button>
    <t-button  v-on:click="$refs.modal.show()" autoPictureInPicture="true" v-if="fileReady" class="ml-10"> Email Recording 📧</t-button>
</div>
<div class="mt-5" v-show="fileReady">
  <video class="center" height="500px"  controls  autoplay="false" id="video" ></video>
</div>
<Adsense
  data-ad-client="ca-pub-7023023584987784"
  data-ad-slot="8876566362"
  v-if="loaded">
</Adsense>
<footer>
  <cookie-law theme="base"></cookie-law>
</footer>
  </div>
</template>

<script>
 import CookieLaw from 'vue-cookie-law'
 import { mapGetters, mapActions } from 'vuex'
 import JSZip from 'jszip'
 import FileSaver from 'file-saver'
 import SpeechKit from '@mastashake08/speech-kit'
export default {
  name: 'Home',
  components: { CookieLaw },
  data() {
    return {
      speechKit: {},
      youtube_ready: false,
      canRecord: true,
      isRecording: false,
      loaded: false,
      options: {
        audioBitsPerSecond: 128000,
        videoBitsPerSecond: 2500000
      },
      displayOptions: {
      video: {
        cursor: "always"
      },
      audio: {
          echoCancellation: true,
          noiseSuppression: true,
          sampleRate: 44100
        }
      },
      mediaRecorder: {},
      stream: {},
      recordedChunks: [],
      file: null,
      fileReady: false,
      sendEmail: '',
      url: 'https://screen-recorder-micro.jcompsolu.com',
      bytes_processed: 0,
      yt_token: '',
      transcript: {},
      vidUrl: '',
      shareReady: false,
      speechEnabled: true,
      isYtStreaming: false,
      cid: ''
    }
  },
  methods: {
    ...mapActions(['setYouTube', 'streamToYouTube', 'uploadToYouTube', 'setSpeech', 'speak', 'listen', 'stopListen', 'getTranscript']),
    async connectToYoutube () {
      window.open(`${this.url}/api/login/youtube`, "YouTube Login", 'width=800, height=600');
    },
    async uploadToDrive () {
      var d = new Date();
      var n = d.toUTCString();
      const zip = new JSZip()
      zip.file(`${n}.webm`, this.file)
      zip.file(`${n}.txt`, this.transcript)
      const content = await zip.generateAsync({ type: 'blob' })
      let metadata = {
          'name': 'Screen Recorder Pro - ' + new Date(), // Filename at Google Drive
          'mimeType': 'application/zip', // mimeType at Google Drive
      }
      let form = new FormData();
      form.append('metadata', new Blob([JSON.stringify(metadata)], {type: 'application/json'}));
      form.append('file', content);
      await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache',
        headers: {
          'Content-Length': this.file.length,
          Authorization: `Bearer ${this.yt_token}`
        },
        body: form
      })
      alert('Video uploaded to Google Drive!')
    },
    upload () {
      this.uploadToYouTube(this.file)
    },
    async copyUrl () {
      const { ClipboardItem } = window;
      var type = "text/plain";
      var blob = new Blob([this.vidUrl], { type });
      var data = [new ClipboardItem({ [type]: blob })];

      await navigator.clipboard.write(data)
      alert('URL copied to clipboard!')
    },
    async share () {
    const shareData = {
        title: 'Screen Recorder Pro',
        text: 'Watch my screen recording!',
        url: this.vidUrl,
        files: [this.file]
      }
      try {
      await navigator.share(shareData)
      } catch(err) {
      console.log(err)
      this.copyUrl()
      }
    },
    async emailFile () {
      try {
        var d = new Date();
        var n = d.toUTCString();
        const zip = new JSZip()
        zip.file(`${n}.webm`, this.file)
        zip.file(`${n}.txt`, this.transcript)
        const content = await zip.generateAsync({ type: 'blob' })
        const fd = new FormData();
        fd.append('video', content)
        fd.append('email', this.sendEmail)
        await fetch(`${this.url}/api/email-file`, {
          method: 'post',
          body: fd
        })
        this.$gtag.event('email-file-data', {
          'name': this.file.name,
          'size': this.file.size,
          'email': this.sendEmail
        })
      this.$refs.modal.hide()
      this.showNotification()
      } catch (err) {
        alert(err.message)
      }
    },
    async uploadFileData () {
      try {
        this.shareReady = false
        const fd = new FormData();
        fd.append('video', this.file)
        const res = await fetch(`${this.url}/api/upload-file-data`, {
          method: 'post',
          body: fd
        })
        const jres = await res.json()
        this.vidUrl = 'https://recorder.jcompsolu.com/#/view?video='+jres.id

        this.$gtag.event('upload-file-data', {
          'name': this.file.name,
          'size': this.file.size
        })
      } catch (e) {
        this.$gtag.exception('application-error', e)
      }
    },
    makeBlob () {

      return new Blob(this.recordedChunks, {
        type: this.mediaRecorder.mimeType
      });
    },
    async setFile (){
      this.transcript = this.speechKit.getTextAsFile()
      this.file = this.makeBlob()
      this.$gtag.event('file-set', {
        'event_category' : 'Files',
        'event_label' : 'File Set'
      })
      const newObjectUrl = URL.createObjectURL( this.file );
      const videoEl = document.getElementById('video')
      // URLs created by `URL.createObjectURL` always use the `blob:` URI scheme: https://w3c.github.io/FileAPI/#dfn-createObjectURL
      const oldObjectUrl = videoEl.src;
      if( oldObjectUrl && oldObjectUrl.startsWith('blob:') ) {
          // It is very important to revoke the previous ObjectURL to prevent memory leaks. Un-set the `src` first.
          // See https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL

          videoEl.src = ''; // <-- Un-set the src property *before* revoking the object URL.
          URL.revokeObjectURL( oldObjectUrl );
      }

      // Then set the new URL:
      videoEl.src = newObjectUrl;
      videoEl.autoplay = false
      // And load it:
      videoEl.load();
      this.$gtag.event('file-loaded', {
        'event_category' : 'Files',
        'event_label' : 'File Loaded'
      })
      videoEl.onloadedmetadata = () => {
        this.uploadFileData()
        this.getBytes()
      }
      videoEl.onPlay = () => {
        this.$gtag.event('file-played', {
          'event_category' : 'Files',
          'event_label' : 'File Played'
        })
      }

    },
    download: function(){
      var d = new Date();
      var n = d.toUTCString();
      const zip = new JSZip()
      zip.file(`${n}.webm`, this.file)
      zip.file(`${n}.txt`, this.transcript)
      zip.generateAsync({ type: 'blob' }).then(function (content) {
        FileSaver.saveAs(content, `Screen Recorder Pro - ${n}.zip`);
      });
      this.recordedChunks = []
      this.showNotification()
      this.$gtag.event('file-downloaded', {
        'event_category' : 'Files',
        'event_label' : 'File Downloaded'
      })
    },
    showNotification: function() {
      this.$gtag.event('notification-shown', {})
      var img = '/logo.png';
      var text = 'If you enjoyed this product consider donating!';
      navigator.serviceWorker.getRegistration().then(function(reg) {
        reg.showNotification('Screen Record Pro', { body: text, icon: img, requireInteraction: true,
        actions: [
            {action: 'donate', title: 'Donate',icon: 'logo.png'},
            {action: 'close', title: 'Close',icon: 'logo.png'}
            ]
              });
      });
    },
    stopEvent () {
      this.setFile()
      this.fileReady = true
      this.isRecording = false
      this.shareReady = true
    },
    handleDataAvailable: async function(event) {
      if (event.data.size > 0) {
        this.recordedChunks.push(event.data);
        //this.isRecording = false
        this.setFile()
        if(this.isYtStreaming) {
          const file = this.makeBlob()
          const yt = this.getYoutube

          yt.createDashManifest(file, 'dash.mpd')
        }
      } else {
        // ...
      }
    },
    async toggleYTStream () {
      if(!this.isYtStreaming) {
        this.cid = await this.streamToYouTube()
      }
      this.isYtStreaming = !this.isYtStreaming
    },
    async registerPeriodicNewsCheck () {
      const registration = await navigator.serviceWorker.ready;
      try {
        await registration.periodicSync.register('get-latest-stats', {
          minInterval: 24 * 60 * 60 * 1000,
        });
      } catch (e) {
        this.$gtag.exception('application-error', e)
      }
    },
    stopStream: function() {
      this.mediaRecorder.stop()
      navigator.clearAppBadge()
      this.stream.getTracks()
      .forEach(track => track.stop())
      this.stream = null
      this.$gtag.event('stream-stop', {
        'event_category' : 'Streams',
        'event_label' : 'Stream Stopped'
      })
      this.speechKit.stopListen()
      //this.speak('Recording stopped!')
      this.isRecording = false
      this.fileReady = true
    },
    getStream: async function() {
      try {
        this.stream =  await navigator.mediaDevices.getDisplayMedia(this.displayOptions);
  
        this.stream.getVideoTracks()[0].onended = () => { // Click on browser UI stop sharing button
          this.stream.getTracks()
          .forEach(track => track.stop())
        };
        const audioStream = await navigator.mediaDevices.getUserMedia({audio: true}).catch(e => {throw e});
        const audioTrack = audioStream.getAudioTracks();
        // add audio track
        this.stream.addTrack(audioTrack[0])
        this.mediaRecorder = new MediaRecorder(this.stream)
        this.mediaRecorder.addEventListener('error', (event) => {
          alert(`error recording stream: ${event.error.name}`)
        });
        this.mediaRecorder.ondataavailable = this.handleDataAvailable;
        this.mediaRecorder.onstop = this.stopEvent
        console.log(this.speechEnabled)
        if(this.speechEnabled == true) {
          this.speechKit.speak('Recording started!')
        }
        this.fileReady = false
        navigator.setAppBadge()
        this.mediaRecorder.start(2000);
        this.isRecording = true
        this.speechKit.listen()
        this.$gtag.event('stream-start', {
          'event_category' : 'Streams',
          'event_label' : 'Stream Started'
        })


      } catch(e) {
        console.log(e)
        this.isRecording = false
        this.$gtag.exception('application-error', e)
      }
    },
    async getBytes () {
      const result = await fetch(`${this.url}/api/get-stats`)
      this.bytes_processed = await result.json()
    },
    skipDownloadUseCache () {
      this.bytes_processed = localStorage.bytes_processed
    }

  },
  mounted() {
    this.loaded = true
    const ctx = this
    window.addEventListener("message", function (e) {
      if (typeof e.data.youtube_token !== 'undefined') {
        console.log(e.data.youtube_token)
        ctx.yt_token = e.data.youtube_token
        ctx.setYouTube(e.data.youtube_token)
        ctx.youtube_ready = true
      }
    })
    this.$gtag.pageview("/");
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua) || /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        alert('You must be on desktop to use this application!')
        this.canRecord = false
        this.$gtag.exception('mobile-device-attempt', {})
    }
    let that = this
    if (Notification.permission !== 'denied' || Notification.permission === "default") {
      try {
        Notification.requestPermission().then(function(result) {
          that.$gtag.event('accepted-notifications', {
            'event_category' : 'Notifications',
            'event_label' : 'Notification accepted'
          })
          console.log(result)
        });
      } catch (error) {
          // Safari doesn't return a promise for requestPermissions and it
          // throws a TypeError. It takes a callback as the first argument
          // instead.
          if (error instanceof TypeError) {
              Notification.requestPermission((result) => {
                that.$gtag.event('accepted-notifications', {
                  'event_category' : 'Notifications',
                  'event_label' : 'Notification accepted'
                })
                console.log(result)
              });
          } else {
            this.$gtag.exception('notification-error', error)
            throw error;
          }
      }

    }
  },
  computed: {
    ...mapGetters(['getYoutube', 'getSpeech', 'getText']),
    uploadReady () {
      return this.fileReady && this.youtube_ready
    }
  },
  async created () {
    try {
      this.speechKit = new SpeechKit({continuous: false, interimResults: true})
      if(sessionStorage.youtube_key != null) {
        this.setYouTube(sessionStorage.youtube_key)
          this.youtube_ready = true
          console.log(this.youtube_ready)
      }
      const registration = await navigator.serviceWorker.ready
      const tags = await registration.periodicSync.getTags()
      navigator.serviceWorker.addEventListener('message', event => {
        this.bytes_processed = event.data
      });
      if (tags.includes('get-latest-stats')) {
          // this.skipDownloadUseCache()
      } else {
        this.getBytes()
      }
    } catch (e) {
      this.$gtag.exception('application-error', e)
      this.getBytes()
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
:picture-in-picture {
  box-shadow: 0 0 0 5px red;
  height: 500px;
  width: 500px;
}
</style>
