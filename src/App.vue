<template>
  <div id="app">
    <img alt="J Computer Solutions Logo" src="./assets/logo.png" class="object-contain h-48 w-full">
    <p>
    Record your screen and save the file as a video.
    Perfect for screen recording for clients. Completely client side app and is installable as a PWA!
    </p>
    <p>

    Currently full system audio is only available in Windows and Chrome OS.
    In Linux and MacOS only chrome tabs are shared.
    </p>
    <t-button v-on:click="getStream" v-if="!isRecording"> Start Recording 🎥</t-button>
    <t-button v-on:click="stopStream" v-else> Stop Screen Recording ❌ </t-button>
    <br>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      isRecording: false,
      options: { mimeType: "video/webm; codecs=vp9" },
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
      recordedChunks: []
    }
  },
  methods: {
    download: function(){
      var blob = new Blob(this.recordedChunks, {
      type: "video/webm"
    });

    var url = URL.createObjectURL(blob);
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
        this.download();
      } else {
        // ...
      }
    },
    stopStream: function() {
      this.mediaRecorder.stop()
    },
    getStream: async function() {
    try {

        this.stream =  await navigator.mediaDevices.getDisplayMedia(this.displayOptions);
        this.mediaRecorder = new MediaRecorder(this.stream, this.options);
        this.mediaRecorder.ondataavailable = this.handleDataAvailable;
        this.mediaRecorder.start();
        this.isRecording = true
      } catch(err) {
        this.isRecording = false
        alert(err);
      }
    }
  },
  mounted() {
  Notification.requestPermission().then(function(result) {
    console.log(result);
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
