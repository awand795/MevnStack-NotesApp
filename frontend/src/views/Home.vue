<template>
  <div class="home">
    <v-snackbar v-model="snackbar" top :timeout="4000" color="success">
      <span>Berhasil Menambahkan Catatan Baru</span>
      <v-btn flat text color="white" @click="snackbar = false">Close</v-btn>
    </v-snackbar>
    <v-snackbar v-model="snackdelete" top :timeout="4000" color="success">
      <span>Berhasil Menghapus Catatan</span>
      <v-btn flat text color="white" @click="snackdelete = false">Close</v-btn>
    </v-snackbar>
    <v-snackbar v-model="snackedit" top :timeout="4000" color="success">
      <span>Berhasil Edit Catatan</span>
      <v-btn flat text color="white" @click="snackedit =false">Close</v-btn>
    </v-snackbar>

    <v-row wrap>
      <v-col cols="12" md="4" sm="4" class="green lighten-3">
        <h2 class="green--text text--darken-4 ml-6 mt-8 headline font-weight-bold">Daftar Catatan</h2>
        <v-card class="grey lighten-2 ml-6 mr-6 mt-8 mb-8 pb-4 pt-4 rounded-corner" v-for="note in listNotes" :key="note._id">
          <p class="ml-4 mb-0 font-weight-bold">{{note.title}}<br/><span class="caption grey--text text--darken-2 mt-0">{{note.date}}</span> <span class="ml-1 caption grey--text text--darken-2 mt-0">{{note.time}}</span></p>
          <p class="ml-4 mt-4 font-weight-light body-2">{{note.note}}</p>
          <v-btn fab depressed small dark flat text right href="" @click="deleteNotes(note._id)"><v-icon small>mdi-delete</v-icon></v-btn>
          
          <v-dialog max-width="600px" v-model="dialog">
          <v-btn fab depressed small dark flat text right slot="activator" @click="editnotes(note._id)"><v-icon small>mdi-edit</v-icon></v-btn>
          <v-card class="grey lighten-1">
            <v-card-title>
                <h3>Edit Notes</h3>
            </v-card-title>
            <v-card-text>
                <v-form ref="form">
                    <v-text-field label="Judul Catatan" v-model="titlee" prepend-icon="mdi-folder" :rules="inputRules"></v-text-field>
                    <v-textarea label="Isi Catatan" v-model="notee" prepend-icon="mdi-edit" :rules="inputRules"></v-textarea>
                    <v-btn class="green darken-4 white--text mx-0 mt-3" :loading="loadingg" @click="saveedit()">Edit Catatan</v-btn>
                </v-form>
            </v-card-text>
           </v-card>
        </v-dialog>

        </v-card>
      </v-col>
      <v-col cols="12" md="8" sm="8" class="green lighten-4">
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
        
      </v-col> 
    </v-row>
  </div>
</template>

<style>
  .rounded-corner{
    border-radius: 20px !important;
  }
</style>

<script>
import axios from 'axios';
const d = new Date();

export default {
  name: 'Home',
  data:()=>({
    listNotes:[],
    url:'api/catatan',
    message:[],
    note:"",
    title:"",
    notee:"",
    titlee:"",
    id:"",
    inputRules:[
      v => v.length >= 3 || 'Panjang Minimum 3 Karakter'
    ],
    loading:false,
    loadingg:false,
    snackbar:false,
    snackdelete:false,
    snackedit:false,
    dialog:false
  }),
  methods:{
    async getAllNotes(){
      await axios.get(this.url).then((res)=>{
        this.listNotes = res.data.data;
      }).catch((err)=>{
        this.listNotes = err;
      })
    },
    async deleteNotes(id){
      await axios.delete(this.url+"/?id="+id);
      await this.getAllNotes();
      this.snackdelete = true;
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
        });
        await this.getAllNotes();
      }
    },
    async editnotes(id){
      this.id = id;
      this.dialog = true;
      await axios.get(this.url+"?id="+id).then((res)=>{
        this.titlee = res.data.data.title;
        this.notee = res.data.data.note;
      })
    },
    async saveedit(){
      this.loadingg = true;
      await axios.put(this.url+"?id="+this.id,{
        "title":this.titlee,
        "note":this.notee
      }).then(()=>{
        this.dialog=false;
        this.snackedit=true;
        this.loadingg = false;
      });
      await this.getAllNotes();
    }
  },
  async created(){
    await this.getAllNotes()
  }
}
</script>
