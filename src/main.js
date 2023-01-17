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
  TToggle: {
    fixedClasses: {
      wrapper: 'relative inline-flex flex-shrink-0 cursor-pointer transition-colors ease-in-out duration-200',
      wrapperChecked: 'relative inline-flex flex-shrink-0 cursor-pointer transition-colors ease-in-out duration-200  border-2 border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
      wrapperDisabled: 'relative inline-flex flex-shrink-0 cursor-pointer transition-colors ease-in-out duration-200 opacity-50 cursor-not-allowed',
      wrapperCheckedDisabled: 'relative inline-flex flex-shrink-0 cursor-pointer transition-colors ease-in-out duration-200 opacity-50 cursor-not-allowed border-2 border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
      button: 'inline-block absolute transform translate-x-0 transition ease-in-out duration-200',
      buttonChecked: 'inline-block absolute transform translate-x-full transition ease-in-out duration-200',
      checkedPlaceholder: 'inline-block',
      uncheckedPlaceholder: 'inline-block'
    },
    classes: {
      wrapper: 'bg-gray-100 rounded-full border-2 border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
      wrapperChecked: 'bg-blue-500 rounded-full',
      wrapperDisabled: 'bg-gray-100 rounded-full border-2 border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
      wrapperCheckedDisabled: 'bg-blue-500',
      button: 'h-5 w-5 rounded-full bg-white shadow flex items-center justify-center text-gray-400 text-xs',
      buttonChecked: 'h-5 w-5 rounded-full bg-white shadow flex items-center justify-center text-blue-500 text-xs',
      checkedPlaceholder: 'rounded-full w-5 h-5 flex items-center justify-center text-gray-400 text-xs',
      uncheckedPlaceholder: 'rounded-full w-5 h-5 flex items-center justify-center text-gray-400 text-xs'
    },
    variants: {
      danger: {
        wrapperChecked: 'bg-red-500 rounded-full',
        wrapperCheckedDisabled: 'bg-red-500 rounded-full'
      },
      success: {
        wrapperChecked: 'bg-green-500 rounded-full',
        wrapperCheckedDisabled: 'bg-green-500 rounded-full'
      },
      box: {
        wrapper: 'bg-gray-100 rounded-sm border-2 border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
        wrapperChecked: 'bg-blue-500 rounded-sm',
        wrapperCheckedDisabled: 'bg-blue-500 rounded-sm',
        button: 'h-6 w-6 rounded-sm bg-white shadow flex items-center justify-center text-gray-400 text-xs',
        buttonChecked: 'h-6 w-6 rounded-sm  bg-white shadow flex items-center justify-center text-blue-500 text-xs',
        checkedPlaceholder: 'rounded-sm w-6 h-6 flex items-center justify-center text-gray-400 text-xs',
        uncheckedPlaceholder: 'rounded-sm w-6 h-6 flex items-center justify-center text-gray-400 text-xs'
      }
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
