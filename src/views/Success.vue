<template>
  <div class="Success">
    <img alt="Screen Record Pro" src="../assets/logo.svg" class="animate-fade-slow object-contain h-80 w-full">
    <h2 class="text-sm tracking-wide font-medium text-gray-500 uppercase">Youtube Connected!</h2>
    <p class="text-base font-light leading-relaxed mt-0 mb-4 text-gray-800">
    Thank you for authenticating with Screen Record Pro! This window will close automatically
    </p>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Success',
  mounted () {
    window.localStorage.setItem('youtube_key', this.$route.query.token)
    window.opener.postMessage({youtube_token: this.$route.query.token}, '*')
    window.close()
  },
  computed: {
    ...mapGetters(['getYoutube'])
  },
  methods : {
    ...mapActions(['setYouTube'])
  }
}
</script>
