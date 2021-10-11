import Vue from 'vue'
import App from './App.vue'
import VueTailwind from 'vue-tailwind'
import Ads from 'vue-google-adsense'
import VueGtag from "vue-gtag";
import "tailwindcss/tailwind.css"
import router from './router'
import store from './store'
Vue.use(VueGtag, {
  config: { id: "UA-68652214-3" }
});

Vue.use(require('vue-script2'))

Vue.use(Ads.Adsense)
const settings = {
  TInput: {
    classes: 'form-input border-2 text-gray-700',
    variants: {
      error: 'form-input border-2 border-red-300 bg-red-100',
      // ... Infinite variants
    }
  },
TButton: {
    classes: 'rounded-lg border block inline-flex items-center justify-center block px-4 py-2 transition duration-100 ease-in-out focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
    variants: {
      secondary: 'rounded-lg border block inline-flex items-center justify-center bg-purple-500 border-purple-500 hover:bg-purple-600 hover:border-purple-600',
    }
  },
  TAlert: {
    classes: {
      wrapper: 'rounded bg-blue-100 p-4 flex text-sm border-l-4 border-blue-500',
      body: 'flex-grow text-blue-700',
      close: 'text-blue-700 hover:text-blue-500 hover:bg-blue-200 ml-4 rounded',
      closeIcon: 'h-5 w-5 fill-current'
    },
    variants: {
      danger: {
        wrapper: 'rounded bg-red-100 p-4 flex text-sm border-l-4 border-red-500',
        body: 'flex-grow text-red-700',
        close: 'text-red-700 hover:text-red-500 hover:bg-red-200 ml-4 rounded'
      },
      // ... Infinite variants
    }
  },
  // ... The rest of the components
}

Vue.use(VueTailwind, settings)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
