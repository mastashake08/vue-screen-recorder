<template>
  <div id="app">
    <img alt="Screen Record Pro" src="./assets/logo.svg" class="animate-fade-slow object-contain h-80 w-full">
    <h2 class="text-sm tracking-wide font-medium text-gray-500 uppercase">Free Online Screen Recorder</h2>
    <p class="text-base font-light leading-relaxed mt-0 mb-4 text-gray-800">
    Screen Record Pro uses Google Adsense to monetize and as a result your data may be used by third-party advertisers to generate a custom ad experience.
    </p>

<Adsense
  data-ad-client="ca-pub-7023023584987784"
  data-ad-slot="8876566362">
</Adsense>
<footer>
  <cookie-law theme="base"></cookie-law>
</footer>
  </div>
</template>

<script>
 import CookieLaw from 'vue-cookie-law'
export default {
  name: 'Privacy',
  components: { CookieLaw },
  data() {
    return {

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
