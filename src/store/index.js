import Vue from 'vue'
import Vuex from 'vuex'
import Youtube from '../classes/Youtube'
import SpeechKit from '../classes/SpeechKit'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    yt: {},
    speech: {},
    transcript: {}
  },
  mutations: {
    setSpeech (state) {
      state.speech = new SpeechKit()
    },
    setYouTube (state, token) {
      state.yt = new Youtube(token)
    },
    streamToYouTube (state) {
      return state.yt.createNewLiveStream()
    },
    uploadToYouTube (state, blob) {
      return state.yt.uploadVideo(blob)
    },
    getBroadcasts (state) {
      return state.yt.getBroadcasts()
    },
    createBroadcast (state) {
      return state.yt.createNewLiveStream()
    },
    speak (state, text) {
      return state.speech.speak(text)
    },
    listen (state) {
      return state.speech.listen()
    },
    stopListen (state) {
      return state.speech.stopListen()
    },
     getTranscript (state) {
      state.transcript = state.speech.getText()
      return new Promise((resolve) => {
            // Do something here... lets say, a http call using vue-resource
            resolve(state.transcript)
        })
    }
  },
  actions: {
    getTranscript (context) {
      context.commit('getTranscript')
    },
    listen (context) {
      context.commit('listen')
    },
    stopListen (context) {
      context.commit('stopListen')
    },
    speak (context, text) {
      context.commit('speak', text)
    },
    setSpeech (context) {
      context.commit('setSpeech')
    },
    setYouTube (context, token) {
      context.commit('setYouTube', token)
    },
    streamToYouTube (context) {

      context.commit('streamToYouTube')
    },
    uploadToYouTube (context, blob) {
      console.log('Upload to yt')
      context.commit('uploadToYouTube', blob)
    },
    getBroadcasts (context) {
      return context.commit('getBroadcasts')
    },
    createBroadcast (context) {
      context.commit('createBroadcast')
    }
  },
  getters: {
    getYoutube (state) {
      return state.yt
    },
    getSpeech (state) {
      return state.speech
    },
    getText (state) {
      return state.transcript
    }
  },
  modules: {
  }
})
