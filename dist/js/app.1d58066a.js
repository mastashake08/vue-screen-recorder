(function(e){function t(t){for(var n,o,s=t[0],c=t[1],u=t[2],l=0,d=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,o=1;o<r.length;o++){var s=r[o];0!==a[s]&&(n=!1)}n&&(i.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={app:0},a={app:0},i=[];function s(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"73ef9e5c"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={about:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"c74d3da2"}[e]+".css",a=c.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===a))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===n||l===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete o[e],p.parentNode.removeChild(p),r(i)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",d.name="ChunkLoadError",d.type=n,d.request=o,r[1](d)}a[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=l;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),r("router-link",{attrs:{to:"/about"}},[e._v("About")]),e._v(" | "),r("router-link",{attrs:{to:"/privacy"}},[e._v("Privacy")]),e._v(" | "),r("router-link",{attrs:{to:"/terms"}},[e._v("TOS")])],1),r("router-view")],1)},a=[],i=(r("034f"),r("2877")),s={},c=Object(i["a"])(s,o,a,!1,null,null,null),u=c.exports,l=r("aff1"),d=r.n(l),p=r("119b"),f=r("a584"),h=(r("b972"),r("d3b7"),r("8c4f")),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("img",{staticClass:"animate-fade-slow object-contain h-80 w-full",attrs:{alt:"Screen Record Pro",src:r("9b19")}}),n("h2",{staticClass:"text-sm tracking-wide font-medium text-gray-500 uppercase"},[e._v("Free Online Screen Recorder")]),n("p",{staticClass:"text-base font-light leading-relaxed mt-0 mb-4 text-gray-800"},[e._v(" Free online screen recorder by J Computer Solutions LLC that allows you to record your screen including microphone audio and save the file to your desktop. No download required, use this progressive web app in the browser! J Computer Solutions LLC provides the #1 free online screen capture software! Due to current browser limitations, this software can only be used on desktop. Please ensure you are on a Windows, MacOS or Linux computer using Chrome, Firefox or Safari! ")]),e._m(0),n("h1",{staticClass:"text-3xl font-large text-gray-500 uppercase"},[e._v("To Date We Have Processed: "),n("strong",{staticClass:"animate-pulse text-3xl font-large text-red-500"},[e._v(e._s(e.bytes_processed))]),e._v(" bytes worth of video data!")]),n("t-modal",{ref:"modal",attrs:{header:"Email Recording"},scopedSlots:e._u([{key:"footer",fn:function(){return[n("div",{staticClass:"flex justify-between"},[n("t-button",{attrs:{type:"button"},on:{click:function(t){return e.$refs.modal.hide()}}},[e._v(" Cancel ")]),n("t-button",{attrs:{type:"button"},on:{click:e.emailFile}},[e._v(" Send File ")])],1)]},proxy:!0}])},[n("t-input",{attrs:{placeholder:"Email Address",name:"send-email"},model:{value:e.sendEmail,callback:function(t){e.sendEmail=t},expression:"sendEmail"}})],1),n("div",{staticClass:"mt-5 mb-5"},[e.isRecording?e._e():n("t-toggle",{attrs:{checkedLabel:"Voices On",uncheckedLabel:"Voices Off",classes:{wrapper:"bg-gray-200 focus:outline-none focus:shadow-outline rounded-sm border-2",wrapperChecked:"bg-gray-200 focus:outline-none focus:shadow-outline rounded-sm border-2",button:"rounded-sm w-6 h-6 bg-white shadow flex items-center justify-center text-gray-800 text-xs",buttonChecked:"rounded-sm w-10 h-6 bg-white shadow flex items-center justify-center text-gray-800 text-xs",checkedPlaceholder:"rounded-sm w-10 h-6 flex items-center justify-center text-gray-500 text-xs",uncheckedPlaceholder:"rounded-sm w-10 h-6 flex items-center justify-center text-gray-500 text-xs"}},model:{value:e.speechEnabled,callback:function(t){e.speechEnabled=t},expression:"speechEnabled"}}),e.isRecording?n("div",[n("t-button",{on:{click:e.stopStream}},[e._v(" Stop Screen Recording ❌ ")])],1):n("t-button",{directives:[{name:"show",rawName:"v-show",value:e.canRecord,expression:"canRecord"}],staticClass:"ml-10",on:{click:e.getStream}},[e._v(" Start Recording 🎥")]),e.uploadReady?n("t-button",{staticClass:"ml-10",on:{click:e.upload}},[e._v("Upload To Youtube 📺")]):e._e(),e.uploadReady?n("t-button",{staticClass:"ml-10",on:{click:e.uploadToDrive}},[e._v("Upload To Drive 🗄️")]):e._e(),e.fileReady?n("t-button",{staticClass:"ml-10",on:{click:e.download}},[e._v(" Download Recording 🎬")]):e._e(),e.shareReady?n("t-button",{staticClass:"ml-10",on:{click:e.share}},[e._v(" Share 🔗")]):e._e(),e.fileReady?n("t-button",{staticClass:"ml-10",attrs:{autoPictureInPicture:"true"},on:{click:function(t){return e.$refs.modal.show()}}},[e._v(" Email Recording 📧")]):e._e()],1),n("div",{directives:[{name:"show",rawName:"v-show",value:e.fileReady,expression:"fileReady"}],staticClass:"mt-5"},[n("video",{staticClass:"center",attrs:{height:"500px",controls:"",id:"video"}})]),e.loaded?n("Adsense",{attrs:{"data-ad-client":"ca-pub-7023023584987784","data-ad-slot":"8876566362"}}):e._e(),n("footer",[n("cookie-law",{attrs:{theme:"base"}})],1)],1)},b=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",{staticClass:"text-base font-light leading-relaxed mt-0 mb-4 text-gray-800"},[e._v(" Want to upload your videos to Google Drive? Connect your Google account! We don't keep your data when you login and it is not required to use the application. To learn more please visit the "),r("a",{attrs:{href:"/#/privacy"}},[e._v("privacy policy")])])}],m=(r("4160"),r("caad"),r("b0c0"),r("2532"),r("3ca3"),r("2ca0"),r("159b"),r("ddb0"),r("2b3d"),r("ade3")),v=(r("96cf"),r("1da1")),y=r("5530"),w=r("d2d0"),x=r.n(w),k=r("2f62"),R=r("c4e3"),S=r.n(R),_=r("21a6"),T=r.n(_),j=r("43e4"),O={name:"Home",components:{CookieLaw:x.a},data:function(){return{speechKit:{},youtube_ready:!1,canRecord:!0,isRecording:!1,loaded:!1,options:{audioBitsPerSecond:128e3,videoBitsPerSecond:25e5},displayOptions:{video:{cursor:"always"},audio:{echoCancellation:!0,noiseSuppression:!0,sampleRate:44100}},mediaRecorder:{},stream:{},recordedChunks:[],file:null,fileReady:!1,sendEmail:"",url:"https://screen-recorder-micro.jcompsolu.com",bytes_processed:0,yt_token:"",transcript:{},vidUrl:"",shareReady:!1,speechEnabled:!0}},methods:Object(y["a"])(Object(y["a"])({},Object(k["b"])(["setYouTube","streamToYouTube","uploadToYouTube","setSpeech","speak","listen","stopListen","getTranscript"])),{},{connectToYoutube:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:window.open("".concat(e.url,"/api/login/youtube"),"YouTube Login","width=800, height=600");case 1:case"end":return t.stop()}}),t)})))()},uploadToDrive:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var r,n,o,a,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=new Date,n=r.toUTCString(),o=new S.a,o.file("".concat(n,".webm"),e.file),o.file("".concat(n,".txt"),e.transcript),t.next=7,o.generateAsync({type:"blob"});case 7:return a=t.sent,i={name:"Screen Recorder Pro - "+new Date,mimeType:"application/zip"},s=new FormData,s.append("metadata",new Blob([JSON.stringify(i)],{type:"application/json"})),s.append("file",a),t.next=14,fetch("https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart",{method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Length":e.file.length,Authorization:"Bearer ".concat(e.yt_token)},body:s});case 14:alert("Video uploaded to Google Drive!");case 15:case"end":return t.stop()}}),t)})))()},upload:function(){this.uploadToYouTube(this.file)},copyUrl:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var r,n,o,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=window,n=r.ClipboardItem,o="text/plain",a=new Blob([e.vidUrl],{type:o}),i=[new n(Object(m["a"])({},o,a))],t.next=6,navigator.clipboard.write(i);case 6:alert("URL copied to clipboard!");case 7:case"end":return t.stop()}}),t)})))()},share:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={title:"Screen Recorder Pro",text:"Watch my screen recording!",url:e.vidUrl,files:[e.file]},t.prev=1,t.next=4,navigator.share(r);case 4:t.next=10;break;case 6:t.prev=6,t.t0=t["catch"](1),console.log(t.t0),e.copyUrl();case 10:case"end":return t.stop()}}),t,null,[[1,6]])})))()},emailFile:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var r,n,o,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,r=new Date,n=r.toUTCString(),o=new S.a,o.file("".concat(n,".webm"),e.file),o.file("".concat(n,".txt"),e.transcript),t.next=8,o.generateAsync({type:"blob"});case 8:return a=t.sent,i=new FormData,i.append("video",a),i.append("email",e.sendEmail),t.next=14,fetch("".concat(e.url,"/api/email-file"),{method:"post",body:i});case 14:e.$gtag.event("email-file-data",{name:e.file.name,size:e.file.size,email:e.sendEmail}),e.$refs.modal.hide(),e.showNotification(),t.next=22;break;case 19:t.prev=19,t.t0=t["catch"](0),alert(t.t0.message);case 22:case"end":return t.stop()}}),t,null,[[0,19]])})))()},uploadFileData:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var r,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.shareReady=!1,r=new FormData,r.append("video",e.file),t.next=6,fetch("".concat(e.url,"/api/upload-file-data"),{method:"post",body:r});case 6:return n=t.sent,t.next=9,n.json();case 9:o=t.sent,e.vidUrl="https://recorder.jcompsolu.com/#/view?video="+o.id,e.shareReady=!0,e.$gtag.event("upload-file-data",{name:e.file.name,size:e.file.size}),t.next=18;break;case 15:t.prev=15,t.t0=t["catch"](0),e.$gtag.exception("application-error",t.t0);case 18:case"end":return t.stop()}}),t,null,[[0,15]])})))()},setFile:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var r,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.transcript=e.speechKit.getText(),e.file=new Blob(e.recordedChunks,{type:e.mediaRecorder.mimeType}),e.$gtag.event("file-set",{event_category:"Files",event_label:"File Set"}),r=URL.createObjectURL(e.file),n=document.getElementById("video"),o=n.src,o&&o.startsWith("blob:")&&(n.src="",URL.revokeObjectURL(o)),n.src=r,n.load(),e.$gtag.event("file-loaded",{event_category:"Files",event_label:"File Loaded"}),n.onloadedmetadata=function(){e.uploadFileData(),e.getBytes()},n.onPlay=function(){e.$gtag.event("file-played",{event_category:"Files",event_label:"File Played"})},e.fileReady=!0;case 13:case"end":return t.stop()}}),t)})))()},download:function(){var e=new Date,t=e.toUTCString(),r=new S.a;r.file("".concat(t,".webm"),this.file),r.file("".concat(t,".txt"),this.transcript),r.generateAsync({type:"blob"}).then((function(e){T.a.saveAs(e,"Screen Recorder Pro - ".concat(t,".zip"))})),this.recordedChunks=[],this.showNotification(),this.$gtag.event("file-downloaded",{event_category:"Files",event_label:"File Downloaded"})},showNotification:function(){this.$gtag.event("notification-shown",{});var e="/logo.png",t="If you enjoyed this product consider donating!";navigator.serviceWorker.getRegistration().then((function(r){r.showNotification("Screen Record Pro",{body:t,icon:e,requireInteraction:!0,actions:[{action:"donate",title:"Donate",icon:"logo.png"},{action:"close",title:"Close",icon:"logo.png"}]})}))},handleDataAvailable:function(e){e.data.size>0&&(this.recordedChunks.push(e.data),this.isRecording=!1,this.setFile())},registerPeriodicNewsCheck:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,navigator.serviceWorker.ready;case 2:return r=t.sent,t.prev=3,t.next=6,r.periodicSync.register("get-latest-stats",{minInterval:864e5});case 6:t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](3),e.$gtag.exception("application-error",t.t0);case 11:case"end":return t.stop()}}),t,null,[[3,8]])})))()},stopStream:function(){this.mediaRecorder.stop(),navigator.clearAppBadge(),this.stream.getTracks().forEach((function(e){return e.stop()})),this.stream=null,this.$gtag.event("stream-stop",{event_category:"Streams",event_label:"Stream Stopped"}),this.speechKit.stopListen()},getStream:function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(){var t,r,n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.getDisplayMedia(this.displayOptions);case 3:return this.stream=e.sent,console.log("STREAM",this.stream),this.stream.getVideoTracks()[0].onended=function(){n.stream.getTracks().forEach((function(e){return e.stop()}))},e.next=8,navigator.mediaDevices.getUserMedia({audio:!0}).catch((function(e){throw e}));case 8:t=e.sent,r=t.getAudioTracks(),this.stream.addTrack(r[0]),this.mediaRecorder=new MediaRecorder(this.stream),this.mediaRecorder.addEventListener("error",(function(e){alert("error recording stream: ".concat(e.error.name))})),this.mediaRecorder.ondataavailable=this.handleDataAvailable,console.log(this.speechEnabled),1==this.speechEnabled&&this.speechKit.speak("Recording started!"),navigator.setAppBadge(),this.mediaRecorder.start(),this.isRecording=!0,this.speechKit.listen(),this.$gtag.event("stream-start",{event_category:"Streams",event_label:"Stream Started"}),e.next=28;break;case 23:e.prev=23,e.t0=e["catch"](0),console.log(e.t0),this.isRecording=!1,this.$gtag.exception("application-error",e.t0);case 28:case"end":return e.stop()}}),e,this,[[0,23]])})));function t(){return e.apply(this,arguments)}return t}(),getBytes:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(e.url,"/api/get-stats"));case 2:return r=t.sent,t.next=5,r.json();case 5:e.bytes_processed=t.sent;case 6:case"end":return t.stop()}}),t)})))()},skipDownloadUseCache:function(){this.bytes_processed=localStorage.bytes_processed}}),mounted:function(){this.loaded=!0;var e=this;window.addEventListener("message",(function(t){"undefined"!==typeof t.data.youtube_token&&(console.log(t.data.youtube_token),e.yt_token=t.data.youtube_token,e.setYouTube(t.data.youtube_token),e.youtube_ready=!0)})),this.$gtag.pageview("/");var t=navigator.userAgent;(/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(t)||/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(t))&&(alert("You must be on desktop to use this application!"),this.canRecord=!1,this.$gtag.exception("mobile-device-attempt",{}));var r=this;if("denied"!==Notification.permission||"default"===Notification.permission)try{Notification.requestPermission().then((function(e){r.$gtag.event("accepted-notifications",{event_category:"Notifications",event_label:"Notification accepted"}),console.log(e)}))}catch(n){if(!(n instanceof TypeError))throw this.$gtag.exception("notification-error",n),n;Notification.requestPermission((function(e){r.$gtag.event("accepted-notifications",{event_category:"Notifications",event_label:"Notification accepted"}),console.log(e)}))}},computed:Object(y["a"])(Object(y["a"])({},Object(k["c"])(["getYoutube","getSpeech","getText"])),{},{uploadReady:function(){return this.fileReady&&this.youtube_ready}}),created:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.speechKit=new j["a"](!1,!1),null!=localStorage.youtube_key&&(e.setYouTube(localStorage.youtube_key),e.youtube_ready=!0),t.next=5,navigator.serviceWorker.ready;case 5:return r=t.sent,t.next=8,r.periodicSync.getTags();case 8:n=t.sent,navigator.serviceWorker.addEventListener("message",(function(t){e.bytes_processed=t.data})),n.includes("get-latest-stats")||e.getBytes(),t.next=17;break;case 13:t.prev=13,t.t0=t["catch"](0),e.$gtag.exception("application-error",t.t0),e.getBytes();case 17:case"end":return t.stop()}}),t,null,[[0,13]])})))()}},C=O,P=(r("cccb"),Object(i["a"])(C,g,b,!1,null,null,null)),D=P.exports;n["default"].use(h["a"]);var B=[{path:"/",name:"Home",component:D},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"/privacy",name:"Privacy",component:function(){return r.e("about").then(r.bind(null,"6f9f"))}},{path:"/terms",name:"TOS",component:function(){return r.e("about").then(r.bind(null,"bd91"))}},{path:"/success",name:"Success",component:function(){return r.e("about").then(r.bind(null,"bb0d"))}},{path:"/view",name:"ViewVid",component:function(){return r.e("about").then(r.bind(null,"456b"))}}],E=new h["a"]({routes:B}),L=E,A=(r("99af"),r("4d63"),r("ac1f"),r("25f0"),r("5319"),r("d4ec")),N=r("bee2"),$=function(){function e(t){Object(A["a"])(this,e),this.token=t,this.broadcasts=[]}return Object(N["a"])(e,[{key:"gup",value:function(e,t){t=t.replace(/[/,"\\").replace(/[\]]/,"\\");var r="[\\#&]"+t+"=([^&#]*)",n=new RegExp(r),o=n.exec(e);return null==o?"":o[1]}},{key:"uploadVideo",value:function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(t){var r,n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t),r=new FormData,n={title:"Screen Recorder Pro Recording - "+new Date,description:"This screen recording was created with Screen Recorder Pro https://recorder.jcompsolu.com",categoryId:"28"},r.append("snippet",JSON.stringify(n)),e.next=6,this.makeRequest("https://youtube.googleapis.com/youtube/v3/videos?part=snippet,id","POST",r);case 6:o=e.sent,console.log(o.json());case 8:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"createNewLiveStream",value:function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(){var t,r,n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t={snippet:{title:"Getting Started With Screen Recorder"},cdn:{frameRate:"variable",ingestionType:"dash",resolution:"variable"}},e.next=4,this.createBroadcast();case 4:return r=e.sent,e.next=7,this.makeRequest("https://www.googleapis.com/youtube/v3/liveStreams?part=cdn&part=snippet","POST",JSON.stringify(t));case 7:return n=e.sent,console.log([r,n]),e.next=11,this.bindBroadCast(r.id,n.id);case 11:o=e.sent,console.log(o),e.next=18;break;case 15:e.prev=15,e.t0=e["catch"](0),console.log(e.t0);case 18:case"end":return e.stop()}}),e,this,[[0,15]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"getBroadcasts",value:function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://www.googleapis.com/youtube/v3/liveBroadcasts?broadcastStatus=all",{headers:{Authorization:"Bearer ".concat(this.token)}});case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,this.broadcasts=r.items,console.log(this.broadcasts),e.abrupt("return",r);case 12:e.prev=12,e.t0=e["catch"](0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,this,[[0,12]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"createBroadcast",value:function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t={snippet:{scheduledStartTime:new Date(Date.now()).toISOString(),title:"Getting Started With Screen Recorder"},contentDetails:{enableDvr:!0,enableAutoStart:!0,enableAutoStop:!0},status:{privacyStatus:"unlisted"}},e.next=4,this.makeRequest("https://youtube.googleapis.com/youtube/v3/liveBroadcasts?part=contentDetails&part=snippet&part=status","POST",JSON.stringify(t));case 4:return r=e.sent,e.abrupt("return",r);case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"bindBroadCast",value:function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(t,r){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n="https://www.googleapis.com/youtube/v3/liveBroadcasts/bind?id=".concat(t,"&part=snippet&streamId=").concat(r),e.prev=1,e.next=4,this.makeRequest(n,"POST",JSON.stringify({}));case 4:return o=e.sent,e.abrupt("return",o);case 8:e.prev=8,e.t0=e["catch"](1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,this,[[1,8]])})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"endBroadcast",value:function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"makeRequest",value:function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(t,r,n){var o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,{method:r,mode:"cors",cache:"no-cache",headers:{Authorization:"Bearer ".concat(this.token)},body:n});case 3:return o=e.sent,e.next=6,o.json();case 6:return a=e.sent,e.abrupt("return",a);case 10:e.prev=10,e.t0=e["catch"](0),alert("There was an error with the request! Please try agin later.");case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));function t(t,r,n){return e.apply(this,arguments)}return t}()}]),e}();n["default"].use(k["a"]);var F=new k["a"].Store({state:{yt:{},speech:{},transcript:{}},mutations:{setSpeech:function(e){e.speech=new j["a"]},setYouTube:function(e,t){e.yt=new $(t)},streamToYouTube:function(e){return e.yt.createNewLiveStream()},uploadToYouTube:function(e,t){return e.yt.uploadVideo(t)},getBroadcasts:function(e){return e.yt.getBroadcasts()},createBroadcast:function(e){return e.yt.createNewLiveStream()},speak:function(e,t){return e.speech.speak(t)},listen:function(e){return e.speech.listen()},stopListen:function(e){return e.speech.stopListen()},getTranscript:function(e){return e.transcript=e.speech.getText(),new Promise((function(t){t(e.transcript)}))}},actions:{getTranscript:function(e){e.commit("getTranscript")},listen:function(e){e.commit("listen")},stopListen:function(e){e.commit("stopListen")},speak:function(e,t){e.commit("speak",t)},setSpeech:function(e){e.commit("setSpeech")},setYouTube:function(e,t){e.commit("setYouTube",t)},streamToYouTube:function(e){e.commit("streamToYouTube")},uploadToYouTube:function(e,t){console.log("Upload to yt"),e.commit("uploadToYouTube",t)},getBroadcasts:function(e){return e.commit("getBroadcasts")},createBroadcast:function(e){e.commit("createBroadcast")}},getters:{getYoutube:function(e){return e.yt},getSpeech:function(e){return e.speech},getText:function(e){return e.transcript}},modules:{}});n["default"].use(f["a"],{config:{id:"UA-68652214-3"}}),n["default"].use(r("395c")),n["default"].use(p["a"].Adsense);var U={TInput:{classes:"form-input border-2 text-gray-700",variants:{error:"form-input border-2 border-red-300 bg-red-100"}},TButton:{classes:"rounded-lg border block inline-flex items-center justify-center block px-4 py-2 transition duration-100 ease-in-out focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed",variants:{secondary:"rounded-lg border block inline-flex items-center justify-center bg-purple-500 border-purple-500 hover:bg-purple-600 hover:border-purple-600"}},TToggle:{fixedClasses:{wrapper:"relative inline-flex flex-shrink-0 cursor-pointer transition-colors ease-in-out duration-200",wrapperChecked:"relative inline-flex flex-shrink-0 cursor-pointer transition-colors ease-in-out duration-200  border-2 border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50",wrapperDisabled:"relative inline-flex flex-shrink-0 cursor-pointer transition-colors ease-in-out duration-200 opacity-50 cursor-not-allowed",wrapperCheckedDisabled:"relative inline-flex flex-shrink-0 cursor-pointer transition-colors ease-in-out duration-200 opacity-50 cursor-not-allowed border-2 border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50",button:"inline-block absolute transform translate-x-0 transition ease-in-out duration-200",buttonChecked:"inline-block absolute transform translate-x-full transition ease-in-out duration-200",checkedPlaceholder:"inline-block",uncheckedPlaceholder:"inline-block"},classes:{wrapper:"bg-gray-100 rounded-full border-2 border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50",wrapperChecked:"bg-blue-500 rounded-full",wrapperDisabled:"bg-gray-100 rounded-full border-2 border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50",wrapperCheckedDisabled:"bg-blue-500",button:"h-5 w-5 rounded-full bg-white shadow flex items-center justify-center text-gray-400 text-xs",buttonChecked:"h-5 w-5 rounded-full bg-white shadow flex items-center justify-center text-blue-500 text-xs",checkedPlaceholder:"rounded-full w-5 h-5 flex items-center justify-center text-gray-400 text-xs",uncheckedPlaceholder:"rounded-full w-5 h-5 flex items-center justify-center text-gray-400 text-xs"},variants:{danger:{wrapperChecked:"bg-red-500 rounded-full",wrapperCheckedDisabled:"bg-red-500 rounded-full"},success:{wrapperChecked:"bg-green-500 rounded-full",wrapperCheckedDisabled:"bg-green-500 rounded-full"},box:{wrapper:"bg-gray-100 rounded-sm border-2 border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50",wrapperChecked:"bg-blue-500 rounded-sm",wrapperCheckedDisabled:"bg-blue-500 rounded-sm",button:"h-6 w-6 rounded-sm bg-white shadow flex items-center justify-center text-gray-400 text-xs",buttonChecked:"h-6 w-6 rounded-sm  bg-white shadow flex items-center justify-center text-blue-500 text-xs",checkedPlaceholder:"rounded-sm w-6 h-6 flex items-center justify-center text-gray-400 text-xs",uncheckedPlaceholder:"rounded-sm w-6 h-6 flex items-center justify-center text-gray-400 text-xs"}}},TAlert:{classes:{wrapper:"rounded bg-blue-100 p-4 flex text-sm border-l-4 border-blue-500",body:"flex-grow text-blue-700",close:"text-blue-700 hover:text-blue-500 hover:bg-blue-200 ml-4 rounded",closeIcon:"h-5 w-5 fill-current"},variants:{danger:{wrapper:"rounded bg-red-100 p-4 flex text-sm border-l-4 border-red-500",body:"flex-grow text-red-700",close:"text-red-700 hover:text-red-500 hover:bg-red-200 ml-4 rounded"}}}};n["default"].use(d.a,U),n["default"].config.productionTip=!1,new n["default"]({router:L,store:F,render:function(e){return e(u)}}).$mount("#app")},"5ced":function(e,t,r){},"85ec":function(e,t,r){},"9b19":function(e,t,r){e.exports=r.p+"img/logo.5c33d4ac.svg"},cccb:function(e,t,r){"use strict";r("5ced")}});
//# sourceMappingURL=app.1d58066a.js.map