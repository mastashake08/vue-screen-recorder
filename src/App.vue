<template>
  <div id="app">
    <img alt="J Computer Solutions Logo" src="./assets/logo.png">
    <p>
    Record your screen and save the file as a video.
    Perfect for screen recording for clients.
    </p>
    <p>
    
    Currently full system audio is only available in Windows and Chrome OS.
    In Linux and MacOS only chrome tabs are shared.
    </p>
    <br>
    <button v-on:click="getStream"> Start Recording 🎥</button>
    <br>
    <button v-on:click="stopStream"> Stop Screen Recording ❌ </button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
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
    console.log("Size: ", blob.size);
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
    },
    handleDataAvailable: function(event) {
      console.log("data-available");
      if (event.data.size > 0) {
        this.recordedChunks.push(event.data);

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
      } catch(err) {
        console.error("Error: " + err);
      }
    }
  },
  created() {

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
