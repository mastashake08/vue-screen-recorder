(function(e){function t(t){for(var n,a,s=t[0],c=t[1],l=t[2],u=0,p=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,s=1;s<r.length;s++){var c=r[s];0!==o[c]&&(n=!1)}n&&(i.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={app:0},i=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=c;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("img",{staticClass:"object-contain h-48 w-full",attrs:{alt:"J Computer Solutions Logo",src:r("cf05")}}),n("p",[e._v(" Record your screen and microphone then save/email the file as a video. Perfect for screen recording for clients. Completely client side app and is installable as a PWA! ")]),n("t-modal",{ref:"modal",attrs:{header:"Email Recording"},scopedSlots:e._u([{key:"footer",fn:function(){return[n("div",{staticClass:"flex justify-between"},[n("t-button",{attrs:{type:"button"},on:{click:function(t){return e.$refs.modal.hide()}}},[e._v(" Cancel ")]),n("t-button",{attrs:{type:"button"},on:{click:e.emailFile}},[e._v(" Send File ")])],1)]},proxy:!0}])},[n("t-input",{attrs:{placeholder:"Email Address",name:"send-email"},model:{value:e.sendEmail,callback:function(t){e.sendEmail=t},expression:"sendEmail"}})],1),n("div",{staticClass:"mt-5"},[e.isRecording?n("t-button",{on:{click:e.stopStream}},[e._v(" Stop Screen Recording ❌ ")]):n("t-button",{on:{click:e.getStream}},[e._v(" Start Recording 🎥")]),e.fileReady?n("t-button",{staticClass:"ml-10",on:{click:e.download}},[e._v(" Download Recording 🎬")]):e._e(),e.fileReady?n("t-button",{staticClass:"ml-10",on:{click:function(t){return e.$refs.modal.show()}}},[e._v(" Email Recording 📧")]):e._e()],1),n("br"),n("Adsense",{attrs:{"data-ad-client":"ca-pub-7023023584987784","data-ad-slot":"8876566362"}})],1)},i=[],a=(r("4160"),r("d3b7"),r("3ca3"),r("159b"),r("ddb0"),r("2b3d"),r("96cf"),r("1da1")),s={name:"App",data:function(){return{isRecording:!1,options:{audioBitsPerSecond:128e3,videoBitsPerSecond:25e5,mimeType:"video/webm"},displayOptions:{video:{cursor:"always"},audio:{echoCancellation:!0,noiseSuppression:!0,sampleRate:44100}},mediaRecorder:{},stream:{},recordedChunks:[],file:null,fileReady:!1,sendEmail:"",url:"https://screen-recorder-micro.jcompsolu.com"}},methods:{emailFile:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,r=new FormData,r.append("video",e.file),r.append("email",e.sendEmail),t.next=6,fetch("".concat(e.url,"/api/email-file"),{method:"post",body:r});case 6:e.$refs.modal.hide(),e.showNotification(),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),alert(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},setFile:function(){this.file=new Blob(this.recordedChunks,{type:"video/webm"}),this.fileReady=!0},download:function(){this.$gtag.event("download-stream",{});var e=URL.createObjectURL(this.file),t=document.createElement("a");document.body.appendChild(t),t.style="display: none",t.href=e;var r=new Date,n=r.toUTCString();t.download=n+".webm",t.click(),window.URL.revokeObjectURL(e),this.recordedChunks=[],this.showNotification()},showNotification:function(){var e="/logo.png",t="If you enjoyed this product consider donating!";navigator.serviceWorker.getRegistration().then((function(r){r.showNotification("Screen Recorder",{body:t,icon:e,requireInteraction:!0,actions:[{action:"donate",title:"Donate",icon:"logo.png"},{action:"close",title:"Close",icon:"logo.png"}]})}))},handleDataAvailable:function(e){e.data.size>0&&(this.recordedChunks.push(e.data),this.isRecording=!1,this.setFile())},stopStream:function(){this.$gtag.event("stream-stop",{}),this.mediaRecorder.stop(),this.mediaRecorder=null,this.stream.getTracks().forEach((function(e){return e.stop()}))},getStream:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.getDisplayMedia(this.displayOptions);case 3:return this.stream=e.sent,e.next=6,navigator.mediaDevices.getUserMedia({audio:!0}).catch((function(e){throw e}));case 6:t=e.sent,r=t.getAudioTracks(),this.stream.addTrack(r[0]),this.mediaRecorder=new MediaRecorder(this.stream),this.mediaRecorder.ondataavailable=this.handleDataAvailable,this.mediaRecorder.start(),this.isRecording=!0,this.$gtag.event("stream-start",{}),e.next=21;break;case 16:e.prev=16,e.t0=e["catch"](0),this.isRecording=!1,this.$gtag.event("stream-stop",{}),alert(e.t0);case 21:case"end":return e.stop()}}),e,this,[[0,16]])})));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){var e=this;Notification.requestPermission().then((function(t){e.$gtag.event("accepted-notifications",{result:t})}))}},c=s,l=(r("034f"),r("2877")),d=Object(l["a"])(c,o,i,!1,null,null,null),u=d.exports,p=r("aff1"),f=r.n(p),h=r("119b"),m=r("a584");r("b972");n["default"].use(m["a"],{config:{id:"2830203221"}}),n["default"].use(r("395c")),n["default"].use(h["a"].Adsense);var b={TInput:{classes:"form-input border-2 text-gray-700",variants:{error:"form-input border-2 border-red-300 bg-red-100"}},TButton:{classes:"rounded-lg border block inline-flex items-center justify-center block px-4 py-2 transition duration-100 ease-in-out focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed",variants:{secondary:"rounded-lg border block inline-flex items-center justify-center bg-purple-500 border-purple-500 hover:bg-purple-600 hover:border-purple-600"}},TAlert:{classes:{wrapper:"rounded bg-blue-100 p-4 flex text-sm border-l-4 border-blue-500",body:"flex-grow text-blue-700",close:"text-blue-700 hover:text-blue-500 hover:bg-blue-200 ml-4 rounded",closeIcon:"h-5 w-5 fill-current"},variants:{danger:{wrapper:"rounded bg-red-100 p-4 flex text-sm border-l-4 border-red-500",body:"flex-grow text-red-700",close:"text-red-700 hover:text-red-500 hover:bg-red-200 ml-4 rounded"}}}};n["default"].use(f.a,b),n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e(u)}}).$mount("#app")},"85ec":function(e,t,r){},cf05:function(e,t,r){e.exports=r.p+"img/logo.4c50e485.png"}});
//# sourceMappingURL=app.d042049e.js.map