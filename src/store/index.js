import Vue from 'vue'
import Vuex from 'vuex'
import Youtube from '../classes/Youtube'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    yt: {}
  },
  mutations: {
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
    }
  },
  actions: {
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
    }
  },
  modules: {
  }
})
