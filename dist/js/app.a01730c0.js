(function(e){function t(t){for(var o,i,s=t[0],c=t[1],l=t[2],u=0,p=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);d&&d(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},a=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"99ec47cc"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(e);var l=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,n[1](l)}r[e]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);var o=n("2b0e"),r=n("9483");Object(r["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var a=n("8c4f"),i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home"},[o("v-row",{attrs:{justify:"center"}},[o("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[o("v-card",[o("v-card-title",[o("span",{staticClass:"headline"},[e._v("¿Cual es tu nombre?")])]),o("v-card-text",[o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[o("v-text-field",{attrs:{label:"Escribe tu nombre",required:""},model:{value:e.user,callback:function(t){e.user=t},expression:"user"}})],1)],1)],1)],1),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Close ")]),o("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.login()}}},[e._v(" Save ")])],1)],1)],1)],1),o("h2",[e._v("¡Bienvenido(a), "+e._s(e.user)+"!!!")]),e.isOnline?o("p",[o("v-icon",{staticStyle:{margin:"0 2px 3px 0px"},attrs:{color:"red"}},[e._v("fiber_manual_record")]),e._v("En linea ")],1):e._e(),e.isOffline?o("p",[o("v-icon",{staticStyle:{margin:"0 2px 3px 0px"}},[e._v("fiber_manual_record")]),e._v("Conexión a internet perdida ")],1):e._e(),o("img",{staticClass:"logo",attrs:{src:n("cf05")}}),o("v-icon",{staticStyle:{"font-size":"40px",margin:"0 14px 29px 14px"},attrs:{color:"black"}},[e._v("info")]),e.playing?o("img",{staticClass:"pause",attrs:{src:n("ec7e")},on:{click:function(t){return e.play()}}}):o("img",{staticClass:"pause",attrs:{src:n("5830")},on:{click:function(t){return e.play()}}}),o("img",{staticClass:"chat",attrs:{src:n("5f66")},on:{click:function(t){e.chat=!0}}}),o("div",[o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:e.chat,callback:function(t){e.chat=t},expression:"chat"}},[o("v-card",[o("v-layout",{attrs:{"align-center":"","justify-center":""}},[o("v-flex",{attrs:{xs12:""}},[o("v-toolbar",{attrs:{dark:"",color:"primary darken-1"}},[o("v-toolbar-title",[e._v("Chat")]),o("v-icon",{staticStyle:{position:"absolute",left:"90%"},on:{click:function(t){e.chat=!e.chat}}},[e._v("close")])],1),o("v-card-text",{attrs:{color:"primary"}},[o("v-list",{ref:"chat",attrs:{id:"logs"}},[e.isOffline?o("p",[o("v-icon",{staticStyle:{margin:"0 2px 3px 0px"}},[e._v("fiber_manual_record")]),e._v("Conexión a internet perdida ")],1):e._e(),e._l(e.logs,(function(t,n){return[t?o("v-subheader",{key:n,class:t.cm,staticStyle:{"margin-block":"3px","border-radius":"20px",height:"auto"}},[o("small",{staticStyle:{"padding-bottom":"20px","font-weight":"600",color:"white","font-size":"16px"}},[e._v(e._s(t.u))]),o("p",{staticStyle:{padding:"20px 0 0 10px","max-width":"60%",color:"#000000","font-weight":"500"}},[e._v(" "+e._s(t.m)+" ")])]):e._e()]}))],2)],1),o("v-card-actions",[o("v-form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[o("v-text-field",{staticStyle:{"min-width":"100%"},attrs:{"solo-inverted":"",label:"Comentario"},on:{enter:function(t){return e.submit()}},model:{value:e.msg,callback:function(t){e.msg=t},expression:"msg"}}),o("v-btn",{attrs:{fab:"",dark:"",small:"",color:"primary",type:"submit"}},[o("v-icon",{attrs:{dark:""}},[e._v("send")])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1),o("audio",{attrs:{id:"radio",src:"https://stream.zenolive.com/1bhx4nnmg5zuv.aac"}})],1)},s=[],c={name:"Home",data(){return{playing:!1,user:localStorage.getItem("user")||"",dialog:!0,chat:!1,logs:[],msg:"",colorMine:"Cm"}},methods:{play(){if(this.playing=!this.playing,this.playing){var e=document.getElementById("radio");document.getElementById("radio").play(),document.getElementById("radio").onloadedmetadata(e.metadata)}else document.getElementById("radio").pause()},async login(){this.dialog=!1,localStorage.setItem("user",this.user)},async submit(){if(""!==this.msg){"Chris"==this.user?this.colorMine="Cm":this.colorMine="Cnm";var e=firebase.firestore();e.collection("chat").add({m:this.msg,u:this.user,cm:this.colorMine}),this.logs.push({m:this.msg,u:this.user,cm:this.colorMine}),this.msg=""}}},watch:{logs(){setTimeout(()=>{this.$refs.chat.$el.scrollTop=this.$refs.chat.$el.scrollHeight},0)}},mounted(){var e=[],t=firebase.firestore();t.collection("chat").get().then(t=>{t.forEach(t=>{e.push(t.data()),this.logs=e})})},computed:{networkStatus(){return this.isOnline?"My network is fine":"I am offline"}}},l=c,u=(n("cccb"),n("2877")),d=n("6544"),p=n.n(d),f=n("8336"),m=n("b0af"),v=n("99d9"),h=n("62ad"),g=n("a523"),b=n("169a"),y=n("0e8f"),x=n("4bd4"),_=n("132d"),w=n("a722"),k=n("8860"),C=n("0fd9"),S=n("2fa4"),V=n("e0c7"),O=n("8654"),j=n("71d9"),E=n("2a7f"),F=Object(u["a"])(l,i,s,!1,null,null,null),T=F.exports;p()(F,{VBtn:f["a"],VCard:m["a"],VCardActions:v["a"],VCardText:v["b"],VCardTitle:v["c"],VCol:h["a"],VContainer:g["a"],VDialog:b["a"],VFlex:y["a"],VForm:x["a"],VIcon:_["a"],VLayout:w["a"],VList:k["a"],VRow:C["a"],VSpacer:S["a"],VSubheader:V["a"],VTextField:O["a"],VToolbar:j["a"],VToolbarTitle:E["a"]}),o["a"].use(a["a"]);const M=[{path:"/",name:"Home",component:T},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/chat",name:"Chat",component:function(){return n.e("about").then(n.bind(null,"293a"))}}],P=new a["a"]({mode:"history",base:"/",routes:M});var A=P,B=n("2f62");o["a"].use(B["a"]);var I=new B["a"].Store({state:{},mutations:{},actions:{},modules:{}}),$=n("f309"),z=n("5e4e");o["a"].use($["a"]);var L=new $["a"]({theme:{options:{customProperties:!0},themes:{light:{primary:"#2faff5",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}},lang:{locales:{es:z["a"]},current:"es"},icons:{iconfont:"md"}}),q=(n("bf40"),n("d5e8"),n("d1e7"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("v-app",[n("v-container",{staticStyle:{"padding-top":"100px"}},[n("router-view")],1)],1)],1)}),H=[],N=(n("034f"),n("7496")),D={},J=Object(u["a"])(D,q,H,!1,null,null,null),R=J.exports;p()(J,{VApp:N["a"],VContainer:g["a"]});var G=n("bf4e"),K=n.n(G);o["a"].use(K.a),o["a"].config.productionTip=!1,new o["a"]({router:A,store:I,vuetify:L,render:function(e){return e(R)}}).$mount("#app")},5830:function(e,t,n){e.exports=n.p+"img/play.058abfc1.svg"},"5ced":function(e,t,n){},"5f66":function(e,t,n){e.exports=n.p+"img/chat.0f41e43d.svg"},"85ec":function(e,t,n){},cccb:function(e,t,n){"use strict";n("5ced")},cf05:function(e,t,n){e.exports=n.p+"img/logo.b0938c39.png"},ec7e:function(e,t,n){e.exports=n.p+"img/pause.77dc284e.svg"}});
//# sourceMappingURL=app.a01730c0.js.map