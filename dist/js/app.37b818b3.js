(function(e){function t(t){for(var n,i,s=t[0],c=t[1],u=t[2],l=0,p=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==a[c]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"fa968411"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(e);var u=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(l);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",u.name="ChunkLoadError",u.type=n,u.request=o,r[1](u)}a[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=u;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),r("router-link",{attrs:{to:"/about"}},[e._v("About")]),e._v(" | "),r("router-link",{attrs:{to:"/privacy"}},[e._v("Privacy")]),e._v(" | "),r("router-link",{attrs:{to:"/terms"}},[e._v("TOS")])],1),r("router-view")],1)},o=[],i=(r("034f"),r("2877")),s={},c=Object(i["a"])(s,a,o,!1,null,null,null),u=c.exports,l=r("aff1"),d=r.n(l),p=r("119b"),f=r("a584"),h=(r("b972"),r("d3b7"),r("8c4f")),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("img",{staticClass:"animate-fade-slow object-contain h-80 w-full",attrs:{alt:"Screen Record Pro",src:r("9b19")}}),n("h2",{staticClass:"text-sm tracking-wide font-medium text-gray-500 uppercase"},[e._v("Free Online Screen Recorder")]),n("p",{staticClass:"text-base font-light leading-relaxed mt-0 mb-4 text-gray-800"},[e._v(" Free online screen recorder by J Computer Solutions LLC that allows you to record your screen including microphone audio and save the file to your desktop. No download required, use this progressive web app in the browser! J Computer Solutions LLC provides the #1 free online screen capture software! Due to current browser limitations, this software can only be used on desktop. Please ensure you are on a Windows, MacOS or Linux computer using Chrome, Firefox or Safari! ")]),n("h1",{staticClass:"text-3xl font-large text-gray-500 uppercase"},[e._v("To Date We Have Processed: "),n("strong",{staticClass:"animate-pulse text-3xl font-large text-red-500"},[e._v(e._s(e.bytes_processed))]),e._v(" bytes worth of video data!")]),n("t-modal",{ref:"modal",attrs:{header:"Email Recording"},scopedSlots:e._u([{key:"footer",fn:function(){return[n("div",{staticClass:"flex justify-between"},[n("t-button",{attrs:{type:"button"},on:{click:function(t){return e.$refs.modal.hide()}}},[e._v(" Cancel ")]),n("t-button",{attrs:{type:"button"},on:{click:e.emailFile}},[e._v(" Send File ")])],1)]},proxy:!0}])},[n("t-input",{attrs:{placeholder:"Email Address",name:"send-email"},model:{value:e.sendEmail,callback:function(t){e.sendEmail=t},expression:"sendEmail"}})],1),n("div",{staticClass:"mt-5 mb-5"},[e.youtube_ready?e._e():n("t-button",{on:{click:e.connectToYoutube}},[e._v(" Connect To YouTube 📺")])],1),n("div",{staticClass:"mt-5 mb-5"},[e.isRecording?n("div",[e.youtube_ready?n("t-button",{on:{click:[e.streamToYouTube,e.createBroadcast]}},[e._v("Stream To Youtube 📺")]):e._e(),n("t-button",{on:{click:e.stopStream}},[e._v(" Stop Screen Recording ❌ ")])],1):n("t-button",{directives:[{name:"show",rawName:"v-show",value:e.canRecord,expression:"canRecord"}],staticClass:"ml-10",on:{click:e.getStream}},[e._v(" Start Recording 🎥")]),e.fileReady?n("t-button",{staticClass:"ml-10",on:{click:e.download}},[e._v(" Download Recording 🎬")]):e._e(),e.fileReady?n("t-button",{staticClass:"ml-10",attrs:{autoPictureInPicture:"true"},on:{click:function(t){return e.$refs.modal.show()}}},[e._v(" Email Recording 📧")]):e._e()],1),n("div",{directives:[{name:"show",rawName:"v-show",value:e.fileReady,expression:"fileReady"}],staticClass:"mt-5"},[n("video",{staticClass:"center",attrs:{height:"500px",controls:"",id:"video"}})]),n("Adsense",{attrs:{"data-ad-client":"ca-pub-7023023584987784","data-ad-slot":"8876566362"}}),n("footer",[n("cookie-law",{attrs:{theme:"base"}})],1)],1)},v=[],b=(r("4160"),r("caad"),r("b0c0"),r("2532"),r("3ca3"),r("2ca0"),r("159b"),r("ddb0"),r("2b3d"),r("96cf"),r("1da1")),g=r("5530"),y=r("d2d0"),w=r.n(y),x=r("2f62"),k={name:"Home",components:{CookieLaw:w.a},data:function(){return{youtube_ready:!1,canRecord:!0,isRecording:!1,options:{audioBitsPerSecond:128e3,videoBitsPerSecond:25e5,mimeType:"video/webm"},displayOptions:{video:{cursor:"always"},audio:{echoCancellation:!0,noiseSuppression:!0,sampleRate:44100}},mediaRecorder:{},stream:{},recordedChunks:[],file:null,fileReady:!1,sendEmail:"",url:"https://screen-recorder-micro.jcompsolu.com",bytes_processed:0}},methods:Object(g["a"])(Object(g["a"])({},Object(x["b"])(["setYouTube","streamToYouTube","getBroadcasts","createBroadcast"])),{},{connectToYoutube:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:window.open("".concat(e.url,"/api/login/youtube"),"YouTube Login","width=800, height=600");case 1:case"end":return t.stop()}}),t)})))()},emailFile:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,r=new FormData,r.append("video",e.file),r.append("email",e.sendEmail),t.next=6,fetch("".concat(e.url,"/api/email-file"),{method:"post",body:r});case 6:e.$gtag.event("email-file-data",{name:e.file.name,size:e.file.size,email:e.sendEmail}),e.$refs.modal.hide(),e.showNotification(),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),alert(t.t0.message);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))()},uploadFileData:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,r=new FormData,r.append("video",e.file),t.next=5,fetch("".concat(e.url,"/api/upload-file-data"),{method:"post",body:r});case 5:e.$gtag.event("upload-file-data",{name:e.file.name,size:e.file.size}),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),e.$gtag.exception("application-error",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},setFile:function(){var e=this;this.file=new Blob(this.recordedChunks,{type:"video/webm"}),this.$gtag.event("file-set",{event_category:"Files",event_label:"File Set"});var t=URL.createObjectURL(this.file),r=document.getElementById("video"),n=r.src;n&&n.startsWith("blob:")&&(r.src="",URL.revokeObjectURL(n)),r.src=t,r.load(),this.$gtag.event("file-loaded",{event_category:"Files",event_label:"File Loaded"}),r.onloadedmetadata=function(){e.uploadFileData(),e.getBytes()},r.onPlay=function(){e.$gtag.event("file-played",{event_category:"Files",event_label:"File Played"})},this.fileReady=!0},download:function(){var e=URL.createObjectURL(this.file),t=document.createElement("a");document.body.appendChild(t),t.style="display: none",t.href=e;var r=new Date,n=r.toUTCString();t.download=n+".webm",t.click(),window.URL.revokeObjectURL(e),this.recordedChunks=[],this.showNotification(),this.$gtag.event("file-downloaded",{event_category:"Files",event_label:"File Downloaded"})},showNotification:function(){this.$gtag.event("notification-shown",{});var e="/logo.png",t="If you enjoyed this product consider donating!";navigator.serviceWorker.getRegistration().then((function(r){r.showNotification("Screen Record Pro",{body:t,icon:e,requireInteraction:!0,actions:[{action:"donate",title:"Donate",icon:"logo.png"},{action:"close",title:"Close",icon:"logo.png"}]})}))},handleDataAvailable:function(e){e.data.size>0&&(this.recordedChunks.push(e.data),this.isRecording=!1,this.setFile())},registerPeriodicNewsCheck:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,navigator.serviceWorker.ready;case 2:return r=t.sent,t.prev=3,t.next=6,r.periodicSync.register("get-latest-stats",{minInterval:864e5});case 6:t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](3),e.$gtag.exception("application-error",t.t0);case 11:case"end":return t.stop()}}),t,null,[[3,8]])})))()},stopStream:function(){this.mediaRecorder.stop(),this.mediaRecorder=null,this.stream.getTracks().forEach((function(e){return e.stop()})),this.stream=null,this.$gtag.event("stream-stop",{event_category:"Streams",event_label:"Stream Stopped"})},getStream:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(){var t,r,n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.getDisplayMedia(this.displayOptions);case 3:return this.stream=e.sent,this.stream.getVideoTracks()[0].onended=function(){n.stream.getTracks().forEach((function(e){return e.stop()}))},e.next=7,navigator.mediaDevices.getUserMedia({audio:!0}).catch((function(e){throw e}));case 7:t=e.sent,r=t.getAudioTracks(),this.stream.addTrack(r[0]),this.mediaRecorder=new MediaRecorder(this.stream),this.mediaRecorder.ondataavailable=this.handleDataAvailable,this.mediaRecorder.start(),this.isRecording=!0,this.$gtag.event("stream-start",{event_category:"Streams",event_label:"Stream Started"}),e.next=21;break;case 17:e.prev=17,e.t0=e["catch"](0),this.isRecording=!1,this.$gtag.exception("application-error",e.t0);case 21:case"end":return e.stop()}}),e,this,[[0,17]])})));function t(){return e.apply(this,arguments)}return t}(),getBytes:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(e.url,"/api/get-stats"));case 2:return r=t.sent,t.next=5,r.json();case 5:e.bytes_processed=t.sent;case 6:case"end":return t.stop()}}),t)})))()},skipDownloadUseCache:function(){this.bytes_processed=localStorage.bytes_processed}}),mounted:function(){var e=this;window.addEventListener("message",(function(t){"undefined"!==typeof t.data.youtube_token&&(console.log(t.data.youtube_token),e.setYouTube(t.data.youtube_token),e.youtube_ready=!0)})),this.$gtag.pageview("/");var t=navigator.userAgent;(/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(t)||/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(t))&&(alert("You must be on desktop to use this application!"),this.canRecord=!1,this.$gtag.exception("mobile-device-attempt",{}));var r=this;if("denied"!==Notification.permission||"default"===Notification.permission)try{Notification.requestPermission().then((function(e){r.$gtag.event("accepted-notifications",{event_category:"Notifications",event_label:"Notification accepted"}),console.log(e)}))}catch(n){if(!(n instanceof TypeError))throw this.$gtag.exception("notification-error",n),n;Notification.requestPermission((function(e){r.$gtag.event("accepted-notifications",{event_category:"Notifications",event_label:"Notification accepted"}),console.log(e)}))}},computed:Object(g["a"])({},Object(x["c"])(["getYoutube"])),created:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,null!=localStorage.youtube_key&&(e.setYouTube(localStorage.youtube_key),console.log(e.getBroadcasts()),e.youtube_ready=!0),t.next=4,navigator.serviceWorker.ready;case 4:return r=t.sent,t.next=7,r.periodicSync.getTags();case 7:n=t.sent,navigator.serviceWorker.addEventListener("message",(function(t){e.bytes_processed=t.data})),n.includes("get-latest-stats")||e.getBytes(),t.next=16;break;case 12:t.prev=12,t.t0=t["catch"](0),e.$gtag.exception("application-error",t.t0),e.getBytes();case 16:case"end":return t.stop()}}),t,null,[[0,12]])})))()}},R=k,_=(r("cccb"),Object(i["a"])(R,m,v,!1,null,null,null)),S=_.exports;n["default"].use(h["a"]);var O=[{path:"/",name:"Home",component:S},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"/privacy",name:"Privacy",component:function(){return r.e("about").then(r.bind(null,"6f9f"))}},{path:"/terms",name:"TOS",component:function(){return r.e("about").then(r.bind(null,"bd91"))}},{path:"/success",name:"Success",component:function(){return r.e("about").then(r.bind(null,"bb0d"))}}],T=new h["a"]({routes:O}),j=T,C=(r("99af"),r("4d63"),r("ac1f"),r("25f0"),r("5319"),r("d4ec")),B=r("bee2"),P=function(){function e(t){Object(C["a"])(this,e),this.token=t,this.broadcasts=[]}return Object(B["a"])(e,[{key:"gup",value:function(e,t){t=t.replace(/[/,"\\").replace(/[\]]/,"\\");var r="[\\#&]"+t+"=([^&#]*)",n=new RegExp(r),a=n.exec(e);return null==a?"":a[1]}},{key:"uploadVideo",value:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t={snippet:{title:"Test",description:"test"}},console.log(t);case 2:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"createNewLiveStream",value:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(){var t,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.createBroadcast();case 3:return t=e.sent,e.next=6,this.makeRequest("https://www.googleapis.com/youtube/v3/liveStreams?part=cdn&part=snippet","POST",{snippet:{title:"Getting Started With Screen Recorder"},cdn:{frameRate:"variable",ingestionType:"dash",resolution:"variable"}});case 6:return r=e.sent,console.log([t,r]),e.next=10,this.bindBroadCast(t.id,r.id);case 10:n=e.sent,console.log(n),e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,this,[[0,14]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"getBroadcasts",value:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://www.googleapis.com/youtube/v3/liveBroadcasts?broadcastStatus=all",{headers:{Authorization:"Bearer ".concat(this.token)}});case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,this.broadcasts=r.items,console.log(this.broadcasts),e.abrupt("return",r);case 12:e.prev=12,e.t0=e["catch"](0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,this,[[0,12]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"createBroadcast",value:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.makeRequest("https://youtube.googleapis.com/youtube/v3/liveBroadcasts?part=contentDetails&part=snippet&part=status","POST",{snippet:{scheduledStartTime:new Date(Date.now()).toISOString(),title:"Getting Started With Screen Recorder"},contentDetails:{enableDvr:!0,enableAutoStart:!0,enableAutoStop:!0},status:{privacyStatus:"unlisted"}});case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"bindBroadCast",value:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t,r){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n="https://www.googleapis.com/youtube/v3/liveBroadcasts/bind?id=".concat(t,"&part=snippet&streamId=").concat(r),e.prev=1,e.next=4,this.makeRequest(n,"POST",{});case 4:return a=e.sent,e.abrupt("return",a);case 8:e.prev=8,e.t0=e["catch"](1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,this,[[1,8]])})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"endBroadcast",value:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"makeRequest",value:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t,r,n){var a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,{method:r,mode:"cors",cache:"no-cache",headers:{Authorization:"Bearer ".concat(this.token)},body:JSON.stringify(n)});case 3:return a=e.sent,e.next=6,a.json();case 6:return o=e.sent,e.abrupt("return",o);case 10:e.prev=10,e.t0=e["catch"](0),alert("There was an error with the request! Please try agin later.");case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));function t(t,r,n){return e.apply(this,arguments)}return t}()}]),e}();n["default"].use(x["a"]);var $=new x["a"].Store({state:{yt:{}},mutations:{setYouTube:function(e,t){e.yt=new P(t)},streamToYouTube:function(e){return e.yt.createNewLiveStream()},getBroadcasts:function(e){return e.yt.getBroadcasts()},createBroadcast:function(e){return e.yt.createNewLiveStream()}},actions:{setYouTube:function(e,t){console.log(t),e.commit("setYouTube",t)},streamToYouTube:function(e){e.commit("streamToYouTube")},getBroadcasts:function(e){return e.commit("getBroadcasts")},createBroadcast:function(e){e.commit("createBroadcast")}},getters:{getYoutube:function(e){return e.yt}},modules:{}});n["default"].use(f["a"],{config:{id:"UA-68652214-3"}}),n["default"].use(r("395c")),n["default"].use(p["a"].Adsense);var E={TInput:{classes:"form-input border-2 text-gray-700",variants:{error:"form-input border-2 border-red-300 bg-red-100"}},TButton:{classes:"rounded-lg border block inline-flex items-center justify-center block px-4 py-2 transition duration-100 ease-in-out focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed",variants:{secondary:"rounded-lg border block inline-flex items-center justify-center bg-purple-500 border-purple-500 hover:bg-purple-600 hover:border-purple-600"}},TAlert:{classes:{wrapper:"rounded bg-blue-100 p-4 flex text-sm border-l-4 border-blue-500",body:"flex-grow text-blue-700",close:"text-blue-700 hover:text-blue-500 hover:bg-blue-200 ml-4 rounded",closeIcon:"h-5 w-5 fill-current"},variants:{danger:{wrapper:"rounded bg-red-100 p-4 flex text-sm border-l-4 border-red-500",body:"flex-grow text-red-700",close:"text-red-700 hover:text-red-500 hover:bg-red-200 ml-4 rounded"}}}};n["default"].use(d.a,E),n["default"].config.productionTip=!1,new n["default"]({router:j,store:$,render:function(e){return e(u)}}).$mount("#app")},"5ced":function(e,t,r){},"85ec":function(e,t,r){},"9b19":function(e,t,r){e.exports=r.p+"img/logo.5c33d4ac.svg"},cccb:function(e,t,r){"use strict";r("5ced")}});
//# sourceMappingURL=app.37b818b3.js.map