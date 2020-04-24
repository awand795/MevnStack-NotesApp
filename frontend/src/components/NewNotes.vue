<template>
<div class="newnotes">
  <v-snackbar v-model="snackbar" top :timeout="4000" color="success">
    <span>Berhasil Menambahkan Catatan Baru</span>
    <v-btn text color="white" @click="snackbar = false">Close</v-btn>
  </v-snackbar>

    <v-card class="green darken-3 mt-2 pt-6 pb-6 ml-10 mr-10 rounded-corner">
          <v-row>
            <v-col cols="6" md="6" sm="6">
              <h2 class="ml-8 white--text display-1">Simpan Catatan Mu Disini</h2>
              <p class="font-weight-light white--text ml-8 subheading">Web Catatanku adalah web yang berfungsi seperti kertas catatan disini anda dapat membuat catatan seperti di kertas catatan biasa</p>
            </v-col>
            <v-col cols="6" md="6" sm="6">
              <v-img class="shrink right"
              alt="Gambar Kertas"
              src="../assets/pictbook.png"
              contain
              width="400"
              height="150"
              />
            </v-col>
          </v-row>
        </v-card>
        <div class="mt-6 ml-10 mr-10">
          <v-form ref="form">
            <v-text-field v-model="title" placeholder="Judul Catatan" background-color="grey lighten-2" color="green darken-2" filled full-width clearable :rules="inputRules"></v-text-field>
            <v-textarea v-model="note" placeholder="Isi Catatan" background-color="grey lighten-2" color="green darken-2" filled full-width :rules="inputRules"></v-textarea>
            <v-btn @click="newNotes()" class="white darken-4 flat green--text text--darken-4" :loading="loading">Submit</v-btn>
          </v-form>
        </div>
        
</div>
</template>

<script>
import axios from 'axios';
const d = new Date();

export default {
    name:'NewNotes',
    data:()=>({
      url:'catatan',
      note:"",
      title:"",
      inputRules:[
        v => v.length >= 3 || 'Panjang Minimum 3 Karakter'
      ],
      loading:false,
      snackbar:false,
    }),
    methods:{
      async getAllNotes(){
        await axios.get(this.url).then((res)=>{
          this.listNotes = res.data.data;
        }).catch((err)=>{
          this.listNotes = err;
        })
      },
      async newNotes(){
        if(this.$refs.form.validate()){
          this.loading = true;
          await axios.post(this.url,{
            "title":this.title,
            "note":this.note,
            "date": d.getDate()+"-"+(d.getMonth()+1)+"-"+d.getFullYear(),
            "time": d.getHours()+":"+d.getMinutes()
          }).then(()=>{
            this.loading= false;
            this.title = null;
            this.note = null;
            this.snackbar=true;
          }).catch((err)=>{
            return err;
          });
          await this.getAllNotes();
        }
      },
    }
}
</script>

<style scoped>
    .rounded-corner{
        border-radius: 20px !important;
    }
</style>