(function(t){function e(e){for(var a,r,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==i[s]&&(a=!1)}a&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},i={app:0},o=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-29b3f60e":"dd28874b","chunk-6a494e1a":"f93bae18"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-29b3f60e":1,"chunk-6a494e1a":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-29b3f60e":"38612d09","chunk-6a494e1a":"52ec0100"}[t]+".css",i=c.p+a,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var l=o[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===i))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===a||u===i)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[t],p.parentNode.removeChild(p),n(o)},p.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){r[t]=0})));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,n){a=i[t]=[e,n]}));e.push(a[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}i[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var p=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0756":function(t,e,n){t.exports=n.p+"img/pictbook.700d3d8b.png"},4230:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("NavBar"),n("v-content",{staticClass:"grey lighten-4"},[n("router-view")],1)],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("v-app-bar",{staticClass:"green darken-4",attrs:{dark:"",app:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),n("h1",{staticClass:"ml-2 display-1"},[t._v("MyNotes")]),n("v-spacer"),n("v-btn",{attrs:{text:"",href:"https://github.com/awand795/MevnStack-NotesApp",target:"_blank"}},[n("span",{staticClass:"mr-2"},[t._v("Source Code")]),n("v-icon",[t._v("mdi-open-in-new")])],1)],1),n("v-navigation-drawer",{staticClass:"green lighten-4",attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},t._l(t.menus,(function(e){return n("v-list",{key:e.text,attrs:{dense:""}},[n("v-list-item",{attrs:{router:"",to:e.route,link:""}},[n("v-list-item-action",[n("v-icon",[t._v(t._s(e.icons))])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.text))])],1)],1)],1)})),1)],1)},s=[],c={name:"NavBar",data:function(){return{drawer:!1,menus:[{text:"Home",icons:"mdi-home",route:"/"},{text:"Daftar Catatan",icons:"mdi-notes",route:"/ListNotes"},{text:"Tambah Catatan",icons:"mdi-edit",route:"/NewNotes"}]}}},l=c,u=n("2877"),d=n("6544"),p=n.n(d),f=n("40dc"),m=n("5bc1"),v=n("8336"),h=n("132d"),g=n("8860"),b=n("da13"),k=n("1800"),w=n("5d23"),x=n("f774"),_=n("2fa4"),C=Object(u["a"])(l,o,s,!1,null,null,null),y=C.exports;p()(C,{VAppBar:f["a"],VAppBarNavIcon:m["a"],VBtn:v["a"],VIcon:h["a"],VList:g["a"],VListItem:b["a"],VListItemAction:k["a"],VListItemContent:w["a"],VListItemTitle:w["b"],VNavigationDrawer:x["a"],VSpacer:_["a"]});var N={name:"App",components:{NavBar:y},data:function(){return{}}},V=N,j=n("7496"),O=n("a75b"),R=Object(u["a"])(V,r,i,!1,null,null,null),A=R.exports;p()(R,{VApp:j["a"],VContent:O["a"]});n("d3b7");var S=n("8c4f"),E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("v-snackbar",{attrs:{top:"",timeout:4e3,color:"success"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[a("span",[t._v("Berhasil Menambahkan Catatan Baru")]),a("v-btn",{attrs:{text:"",color:"white"},on:{click:function(e){t.snackbar=!1}}},[t._v("Close")])],1),a("v-snackbar",{attrs:{top:"",timeout:4e3,color:"success"},model:{value:t.snackdelete,callback:function(e){t.snackdelete=e},expression:"snackdelete"}},[a("span",[t._v("Berhasil Menghapus Catatan")]),a("v-btn",{attrs:{text:"",color:"white"},on:{click:function(e){t.snackdelete=!1}}},[t._v("Close")])],1),a("v-snackbar",{attrs:{top:"",timeout:4e3,color:"success"},model:{value:t.snackedit,callback:function(e){t.snackedit=e},expression:"snackedit"}},[a("span",[t._v("Berhasil Edit Catatan")]),a("v-btn",{attrs:{text:"",color:"white"},on:{click:function(e){t.snackedit=!1}}},[t._v("Close")])],1),a("v-row",{attrs:{wrap:""}},[a("v-col",{staticClass:"green lighten-3",attrs:{cols:"12",md:"4",sm:"4"}},[a("h2",{staticClass:"green--text text--darken-4 ml-6 mt-8 headline font-weight-bold"},[t._v("Daftar Catatan")]),t._l(t.listNotes,(function(e){return a("v-card",{key:e._id,staticClass:"grey lighten-2 ml-6 mr-6 mt-8 mb-8 pb-4 pt-4 rounded-corner"},[a("p",{staticClass:"ml-4 mb-0 font-weight-bold"},[t._v(t._s(e.title)),a("br"),a("span",{staticClass:"caption grey--text text--darken-2 mt-0"},[t._v(t._s(e.date))]),t._v(" "),a("span",{staticClass:"ml-1 caption grey--text text--darken-2 mt-0"},[t._v(t._s(e.time))])]),a("p",{staticClass:"ml-4 mt-4 font-weight-light body-2"},[t._v(t._s(e.note))]),a("v-btn",{attrs:{fab:"",depressed:"",small:"",dark:"",text:"",right:"",href:""},on:{click:function(n){return t.deleteNotes(e._id)}}},[a("v-icon",{attrs:{small:""}},[t._v("mdi-delete-empty")])],1),a("v-dialog",{attrs:{"max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on;return[a("v-btn",t._g({attrs:{fab:"",depressed:"",small:"",dark:"",text:"",right:""},on:{click:function(n){return t.editnotes(e._id)}}},r),[a("v-icon",{attrs:{small:""}},[t._v("mdi-comment-edit-outline")])],1)]}}],null,!0),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{staticClass:"grey lighten-1"},[a("v-card-title",[a("h3",[t._v("Edit Notes")])]),a("v-card-text",[a("v-form",{ref:"form",refInFor:!0},[a("v-text-field",{attrs:{label:"Judul Catatan","prepend-icon":"mdi-folder",rules:t.inputRules},model:{value:t.titlee,callback:function(e){t.titlee=e},expression:"titlee"}}),a("v-textarea",{attrs:{label:"Isi Catatan","prepend-icon":"mdi-edit",rules:t.inputRules},model:{value:t.notee,callback:function(e){t.notee=e},expression:"notee"}}),a("v-btn",{staticClass:"green darken-4 white--text mx-0 mt-3",attrs:{loading:t.loadingg},on:{click:function(e){return t.saveedit()}}},[t._v("Edit Catatan")])],1)],1)],1)],1)],1)}))],2),a("v-col",{staticClass:"green lighten-4",attrs:{cols:"12",md:"8",sm:"8"}},[a("v-card",{staticClass:"green darken-3 mt-2 pt-6 pb-6 ml-10 mr-10 rounded-corner"},[a("v-row",[a("v-col",{attrs:{cols:"6",md:"6",sm:"6"}},[a("h2",{staticClass:"ml-8 white--text display-1"},[t._v("Simpan Catatan Mu Disini")]),a("p",{staticClass:"font-weight-light white--text ml-8 subheading"},[t._v("Web Catatanku adalah web yang berfungsi seperti kertas catatan disini anda dapat membuat catatan seperti di kertas catatan biasa")])]),a("v-col",{attrs:{cols:"6",md:"6",sm:"6"}},[a("v-img",{staticClass:"shrink right",attrs:{alt:"Gambar Kertas",src:n("0756"),contain:"",width:"400",height:"150"}})],1)],1)],1),a("div",{staticClass:"mt-6 ml-10 mr-10"},[a("v-form",{ref:"form"},[a("v-text-field",{attrs:{placeholder:"Judul Catatan","background-color":"grey lighten-2",color:"green darken-2",filled:"","full-width":"",clearable:"",rules:t.inputRules},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),a("v-textarea",{attrs:{placeholder:"Isi Catatan","background-color":"grey lighten-2",color:"green darken-2",filled:"","full-width":"",rules:t.inputRules},model:{value:t.note,callback:function(e){t.note=e},expression:"note"}}),a("v-btn",{staticClass:"white darken-4 flat green--text text--darken-4",attrs:{loading:t.loading},on:{click:function(e){return t.newNotes()}}},[t._v("Submit")])],1)],1)],1)],1)],1)},B=[],T=(n("96cf"),n("1da1")),L=n("bc3a"),I=n.n(L),M=new Date,P={name:"Home",data:function(){return{listNotes:[],url:"api/catatan",message:[],note:"",title:"",notee:"",titlee:"",id:"",inputRules:[function(t){return t.length>=3||"Panjang Minimum 3 Karakter"}],loading:!1,loadingg:!1,snackbar:!1,snackdelete:!1,snackedit:!1,dialog:!1}},methods:{getAllNotes:function(){var t=this;return Object(T["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,I.a.get(t.url).then((function(e){t.listNotes=e.data.data})).catch((function(e){t.listNotes=e}));case 2:case"end":return e.stop()}}),e)})))()},deleteNotes:function(t){var e=this;return Object(T["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,I.a.delete(e.url+"/?id="+t);case 2:return n.next=4,e.getAllNotes();case 4:e.snackdelete=!0;case 5:case"end":return n.stop()}}),n)})))()},newNotes:function(){var t=this;return Object(T["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.$refs.form.validate()){e.next=6;break}return t.loading=!0,e.next=4,I.a.post(t.url,{title:t.title,note:t.note,date:M.getDate()+"-"+(M.getMonth()+1)+"-"+M.getFullYear(),time:M.getHours()+":"+M.getMinutes()}).then((function(){t.loading=!1,t.title=null,t.note=null,t.snackbar=!0}));case 4:return e.next=6,t.getAllNotes();case 6:case"end":return e.stop()}}),e)})))()},editnotes:function(t){var e=this;return Object(T["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.id=t,e.dialog=!0,n.next=4,I.a.get(e.url+"?id="+t).then((function(t){e.titlee=t.data.data.title,e.notee=t.data.data.note}));case 4:case"end":return n.stop()}}),n)})))()},saveedit:function(){var t=this;return Object(T["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loadingg=!0,e.next=3,I.a.put(t.url+"?id="+t.id,{title:t.titlee,note:t.notee}).then((function(){t.dialog=!1,t.snackedit=!0,t.loadingg=!1}));case 3:return e.next=5,t.getAllNotes();case 5:case"end":return e.stop()}}),e)})))()}},created:function(){var t=this;return Object(T["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getAllNotes();case 2:case"end":return e.stop()}}),e)})))()}},D=P,F=(n("cccb"),n("b0af")),H=n("99d9"),$=n("62ad"),J=n("169a"),K=n("4bd4"),q=n("adda"),G=n("0fd9"),U=n("2db4"),W=n("8654"),Y=n("a844"),z=Object(u["a"])(D,E,B,!1,null,null,null),Q=z.exports;p()(z,{VBtn:v["a"],VCard:F["a"],VCardText:H["a"],VCardTitle:H["b"],VCol:$["a"],VDialog:J["a"],VForm:K["a"],VIcon:h["a"],VImg:q["a"],VRow:G["a"],VSnackbar:U["a"],VTextField:W["a"],VTextarea:Y["a"]}),a["a"].use(S["a"]);var X=[{path:"/",name:"Home",component:Q},{path:"/ListNotes",name:"ListNote",component:function(){return n.e("chunk-29b3f60e").then(n.bind(null,"c34c"))}},{path:"/NewNotes",name:"NewNote",component:function(){return n.e("chunk-6a494e1a").then(n.bind(null,"01bd"))}}],Z=new S["a"]({mode:"history",base:"/",routes:X}),tt=Z,et=n("f309");a["a"].use(et["a"]);var nt=new et["a"]({icons:{iconfont:"mdi"}});a["a"].config.productionTip=!1,new a["a"]({router:tt,vuetify:nt,render:function(t){return t(A)}}).$mount("#app")},cccb:function(t,e,n){"use strict";var a=n("4230"),r=n.n(a);r.a}});
//# sourceMappingURL=app.44cd9775.js.map