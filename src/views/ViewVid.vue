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
    <Adsense
      data-ad-client="ca-pub-7023023584987784"
      data-ad-slot="8876566362">
    </Adsense>
    <div class="mt-5" >
  <video class="center" height="500px"  controls  id="video" :src="video" ></video>
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
export default {
  name: 'View',
  components: { CookieLaw },
  data() {
    return {
      loaded: false,
      video: '',
      videoId: ''
    }
  },
  async mounted() {
    this.loaded = true
    this.videoId = this.$route.query.video
    const vid = await fetch('https://screen-recorder-micro.jcompsolu.com/api/video/' + this.videoId)
    const vidJson = await vid.json()
    this.video = vidJson.path
  },
  computed: {},
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
