(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a494e1a"],{"01bd":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"green lighten-3"},[a("NewNotes")],1)},r=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"newnotes"},[n("v-snackbar",{attrs:{top:"",timeout:4e3,color:"success"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[n("span",[t._v("Berhasil Menambahkan Catatan Baru")]),n("v-btn",{attrs:{text:"",color:"white"},on:{click:function(e){t.snackbar=!1}}},[t._v("Close")])],1),n("v-card",{staticClass:"green darken-3 mt-2 pt-6 pb-6 ml-10 mr-10 rounded-corner"},[n("v-row",[n("v-col",{attrs:{cols:"6",md:"6",sm:"6"}},[n("h2",{staticClass:"ml-8 white--text display-1"},[t._v("Simpan Catatan Mu Disini")]),n("p",{staticClass:"font-weight-light white--text ml-8 subheading"},[t._v("Web Catatanku adalah web yang berfungsi seperti kertas catatan disini anda dapat membuat catatan seperti di kertas catatan biasa")])]),n("v-col",{attrs:{cols:"6",md:"6",sm:"6"}},[n("v-img",{staticClass:"shrink right",attrs:{alt:"Gambar Kertas",src:a("0756"),contain:"",width:"400",height:"150"}})],1)],1)],1),n("div",{staticClass:"mt-6 ml-10 mr-10"},[n("v-form",{ref:"form"},[n("v-text-field",{attrs:{placeholder:"Judul Catatan","background-color":"grey lighten-2",color:"green darken-2",filled:"","full-width":"",clearable:"",rules:t.inputRules},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),n("v-textarea",{attrs:{placeholder:"Isi Catatan","background-color":"grey lighten-2",color:"green darken-2",filled:"","full-width":"",rules:t.inputRules},model:{value:t.note,callback:function(e){t.note=e},expression:"note"}}),n("v-btn",{staticClass:"white darken-4 flat green--text text--darken-4",attrs:{loading:t.loading},on:{click:function(e){return t.newNotes()}}},[t._v("Submit")])],1)],1)],1)},i=[],l=(a("96cf"),a("1da1")),o=a("bc3a"),c=a.n(o),u=new Date,d={name:"NewNotes",data:function(){return{url:"catatan",note:"",title:"",inputRules:[function(t){return t.length>=3||"Panjang Minimum 3 Karakter"}],loading:!1,snackbar:!1}},methods:{getAllNotes:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c.a.get(t.url).then((function(e){t.listNotes=e.data.data})).catch((function(e){t.listNotes=e}));case 2:case"end":return e.stop()}}),e)})))()},newNotes:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.$refs.form.validate()){e.next=6;break}return t.loading=!0,e.next=4,c.a.post(t.url,{title:t.title,note:t.note,date:u.getDate()+"-"+(u.getMonth()+1)+"-"+u.getFullYear(),time:u.getHours()+":"+u.getMinutes()}).then((function(){t.loading=!1,t.title=null,t.note=null,t.snackbar=!0})).catch((function(t){return t}));case 4:return e.next=6,t.getAllNotes();case 6:case"end":return e.stop()}}),e)})))()}}},f=d,m=(a("2c5f"),a("2877")),g=a("6544"),h=a.n(g),b=a("8336"),p=a("b0af"),k=a("62ad"),v=a("4bd4"),w=a("adda"),x=a("0fd9"),C=a("2db4"),N=a("8654"),V=a("a844"),_=Object(m["a"])(f,s,i,!1,null,"2b85ae43",null),R=_.exports;h()(_,{VBtn:b["a"],VCard:p["a"],VCol:k["a"],VForm:v["a"],VImg:w["a"],VRow:x["a"],VSnackbar:C["a"],VTextField:N["a"],VTextarea:V["a"]});var j={name:"NewNote",components:{NewNotes:R}},M=j,y=Object(m["a"])(M,n,r,!1,null,null,null);e["default"]=y.exports},"2c5f":function(t,e,a){"use strict";var n=a("6e10"),r=a.n(n);r.a},"6e10":function(t,e,a){}}]);
//# sourceMappingURL=chunk-6a494e1a.f93bae18.js.map