<template>
  <div id="app">
    <img alt="J Computer Solutions Logo" src="./assets/logo.png" class="object-contain h-48 w-full">
    <h2 class="text-sm tracking-wide font-medium text-gray-500 uppercase">Free Online Screen Recorder</h2>
    <p class="mt-6 text-center text-base font-medium text-gray-500">
    Free online screen recorder by J Computer Solutions LLC that allows you to
    record your screen including microphone audio and save the file to your desktop.
    No download required, use this progressive web app in the browser!
    J Computer Solutions LLC provides the #1 free online screen capture software! Due to current
    browser limitations, this software can only be used on desktop. Please ensure you are on a Windows, MacOS or Linux
    computer using Chrome, Firefox or Safari!
    </p>
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
<div class="mt-5">
    <t-button v-on:click="getStream" v-if="!isRecording"> Start Recording 🎥</t-button>
    <t-button v-on:click="stopStream" v-else> Stop Screen Recording ❌ </t-button>
    <t-button v-on:click="download" v-if="fileReady" class="ml-10"> Download Recording 🎬</t-button>
    <t-button  v-on:click="$refs.modal.show()" autoPictureInPicture=true v-if="fileReady" class="ml-10"> Email Recording 📧</t-button>
</div>
<Adsense
  data-ad-client="ca-pub-7023023584987784"
  data-ad-slot="8876566362">
</Adsense>
<div class="mt-5">
  <video class="center" height="500px"  controls  id="video" v-show="fileReady"></video>
</div>

  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      isRecording: false,
      options: {
        audioBitsPerSecond: 128000,
        videoBitsPerSecond: 2500000,
        mimeType: 'video/webm'
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
      url: 'https://screen-recorder-micro.jcompsolu.com'
    }
  },
  methods: {
    async emailFile () {
      try {
        const fd = new FormData();
        fd.append('video', this.file)
        fd.append('email', this.sendEmail)
        await fetch(`${this.url}/api/email-file`, {
          method: 'post',
          body: fd
        })
      this.$refs.modal.hide()
      this.showNotification()
      } catch (err) {
        alert(err.message)
      }
    },
    setFile (){
      this.file = new Blob(this.recordedChunks, {
        type: "video/webm"
      });
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

      // And load it:
      videoEl.load();
      this.fileReady = true
    },
    download: function(){
      this.$gtag.event('download-stream', {})


    var url = URL.createObjectURL(this.file);
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    a.href = url;
    var d = new Date();
    var n = d.toUTCString();
    a.download = n+".webm";
    a.click();
    window.URL.revokeObjectURL(url);
    this.recordedChunks = []
    this.showNotification()
    },
    showNotification: function() {
      var img = '/logo.png';
      var text = 'If you enjoyed this product consider donating!';
      navigator.serviceWorker.getRegistration().then(function(reg) {
        reg.showNotification('Screen Recorder', { body: text, icon: img, requireInteraction: true,
        actions: [
            {action: 'donate', title: 'Donate',icon: 'logo.png'},
            {action: 'close', title: 'Close',icon: 'logo.png'}
            ]
              });
      });
    },
    handleDataAvailable: function(event) {
      if (event.data.size > 0) {
        this.recordedChunks.push(event.data);
        this.isRecording = false
        this.setFile()
      } else {
        // ...
      }
    },
    stopStream: function() {
      this.$gtag.event('stream-stop', {})
      this.mediaRecorder.stop()
      this.mediaRecorder = null
      this.stream.getTracks()
      .forEach(track => track.stop())

    },
    getStream: async function() {
    try {
        this.stream =  await navigator.mediaDevices.getDisplayMedia(this.displayOptions);

        const audioStream = await navigator.mediaDevices.getUserMedia({audio: true}).catch(e => {throw e});
        const audioTrack = audioStream.getAudioTracks();
        // add audio track
        this.stream.addTrack(audioTrack[0])
        this.mediaRecorder = new MediaRecorder(this.stream)
        this.mediaRecorder.ondataavailable = this.handleDataAvailable;
        this.mediaRecorder.start();
        this.isRecording = true
        this.$gtag.event('stream-start', {})
      } catch(err) {
        this.isRecording = false
        this.$gtag.event('stream-stop', {})
        alert(err);
      }
    }
  },
  mounted() {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        alert('You must be on desktop to use this application!')
    }
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        alert('You must be on desktop to use this application!')
    }

    let that = this
    Notification.requestPermission().then(function(result) {
      that.$gtag.event('accepted-notifications', { result: result })
    });
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
</style>
