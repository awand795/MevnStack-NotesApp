(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c4571646"],{c34c:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"green lighten-3"},[n("ListNotes")],1)},r=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list-notes"},[n("v-snackbar",{attrs:{top:"",timeout:4e3,color:"success"},model:{value:t.snackdelete,callback:function(e){t.snackdelete=e},expression:"snackdelete"}},[n("span",[t._v("Berhasil Menghapus Catatan")]),n("v-btn",{attrs:{flat:"",text:"",color:"white"},on:{click:function(e){t.snackdelete=!1}}},[t._v("Close")])],1),n("v-snackbar",{attrs:{top:"",timeout:4e3,color:"success"},model:{value:t.snackedit,callback:function(e){t.snackedit=e},expression:"snackedit"}},[n("span",[t._v("Berhasil Edit Catatan")]),n("v-btn",{attrs:{flat:"",text:"",color:"white"},on:{click:function(e){t.snackedit=!1}}},[t._v("Close")])],1),n("h2",{staticClass:"green--text text--darken-4 ml-6 mt-8 headline font-weight-bold"},[t._v("Daftar Catatan")]),t._l(t.listNotes,(function(e){return n("v-card",{key:e._id,staticClass:"grey lighten-2 ml-6 mr-6 mt-8 mb-8 pb-4 pt-4 rounded-corner"},[n("p",{staticClass:"ml-4 mb-0 font-weight-bold"},[t._v(t._s(e.title)),n("br"),n("span",{staticClass:"caption grey--text text--darken-2 mt-0"},[t._v(t._s(e.date))]),t._v(" "),n("span",{staticClass:"ml-1 caption grey--text text--darken-2 mt-0"},[t._v(t._s(e.time))])]),n("p",{staticClass:"ml-4 mt-4 font-weight-light body-2"},[t._v(t._s(e.note))]),n("v-btn",{attrs:{fab:"",depressed:"",small:"",dark:"",flat:"",text:"",right:"",href:""},on:{click:function(n){return t.deleteNotes(e._id)}}},[n("v-icon",{attrs:{small:""}},[t._v("mdi-delete")])],1),n("v-dialog",{attrs:{"max-width":"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-btn",{attrs:{slot:"activator",fab:"",depressed:"",small:"",dark:"",flat:"",text:"",right:""},on:{click:function(n){return t.editnotes(e._id)}},slot:"activator"},[n("v-icon",{attrs:{small:""}},[t._v("mdi-edit")])],1),n("v-card",{staticClass:"grey lighten-1"},[n("v-card-title",[n("h3",[t._v("Edit Notes")])]),n("v-card-text",[n("v-form",{ref:"form",refInFor:!0},[n("v-text-field",{attrs:{label:"Judul Catatan","prepend-icon":"mdi-folder",rules:t.inputRules},model:{value:t.titlee,callback:function(e){t.titlee=e},expression:"titlee"}}),n("v-textarea",{attrs:{label:"Isi Catatan","prepend-icon":"mdi-edit",rules:t.inputRules},model:{value:t.notee,callback:function(e){t.notee=e},expression:"notee"}}),n("v-btn",{staticClass:"green darken-4 white--text mx-0 mt-3",attrs:{loading:t.loadingg},on:{click:function(e){return t.saveedit()}}},[t._v("Edit Catatan")])],1)],1)],1)],1)],1)}))],2)},s=[],c=(n("96cf"),n("1da1")),l=n("bc3a"),o=n.n(l),u={name:"ListNotes",data:function(){return{listNotes:[],url:"api/catatan",message:[],note:"",title:"",notee:"",titlee:"",id:"",inputRules:[function(t){return t.length>=3||"Panjang Minimum 3 Karakter"}],loading:!1,loadingg:!1,snackbar:!1,snackdelete:!1,snackedit:!1,dialog:!1}},methods:{getAllNotes:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.get(t.url).then((function(e){t.listNotes=e.data.data})).catch((function(e){t.listNotes=e}));case 2:case"end":return e.stop()}}),e)})))()},deleteNotes:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,o.a.delete(e.url+"/?id="+t);case 2:return n.next=4,e.getAllNotes();case 4:e.snackdelete=!0;case 5:case"end":return n.stop()}}),n)})))()},editnotes:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.id=t,e.dialog=!0,n.next=4,o.a.get(e.url+"?id="+t).then((function(t){e.titlee=t.data.data.title,e.notee=t.data.data.note})).catch((function(t){return t}));case 4:case"end":return n.stop()}}),n)})))()},saveedit:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loadingg=!0,e.next=3,o.a.put(t.url+"?id="+t.id,{title:t.titlee,note:t.notee}).then((function(){t.dialog=!1,t.snackedit=!0,t.loadingg=!1})).catch((function(t){return t}));case 3:return e.next=5,t.getAllNotes();case 5:case"end":return e.stop()}}),e)})))()}},created:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getAllNotes();case 2:case"end":return e.stop()}}),e)})))()}},d=u,f=(n("d801"),n("2877")),m=n("6544"),v=n.n(m),g=n("8336"),p=n("b0af"),h=n("99d9"),k=n("169a"),b=n("4bd4"),x=n("132d"),w=n("2db4"),_=n("8654"),C=n("a844"),N=Object(f["a"])(d,i,s,!1,null,"09bc09af",null),R=N.exports;v()(N,{VBtn:g["a"],VCard:p["a"],VCardText:h["a"],VCardTitle:h["b"],VDialog:k["a"],VForm:b["a"],VIcon:x["a"],VSnackbar:w["a"],VTextField:_["a"],VTextarea:C["a"]});var V={name:"ListNote",components:{ListNotes:R}},j=V,O=Object(f["a"])(j,a,r,!1,null,null,null);e["default"]=O.exports},d801:function(t,e,n){"use strict";var a=n("ef34"),r=n.n(a);r.a},ef34:function(t,e,n){}}]);
//# sourceMappingURL=chunk-c4571646.3fbea625.js.map