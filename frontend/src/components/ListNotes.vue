<template>
<div class="list-notes">
    <v-snackbar v-model="snackdelete" top :timeout="4000" color="success">
      <span>Berhasil Menghapus Catatan</span>
      <v-btn text color="white" @click="snackdelete = false">Close</v-btn>
    </v-snackbar>
    <v-snackbar v-model="snackedit" top :timeout="4000" color="success">
      <span>Berhasil Edit Catatan</span>
      <v-btn text color="white" @click="snackedit =false">Close</v-btn>
    </v-snackbar>

    <h2 class="green--text text--darken-4 ml-6 mt-8 headline font-weight-bold">Daftar Catatan</h2>
        <v-card class="grey lighten-2 ml-6 mr-6 mt-8 mb-8 pb-4 pt-4 rounded-corner" v-for="note in listNotes" :key="note._id">
          <p class="ml-4 mb-0 font-weight-bold">{{note.title}}<br/><span class="caption grey--text text--darken-2 mt-0">{{note.date}}</span> <span class="ml-1 caption grey--text text--darken-2 mt-0">{{note.time}}</span></p>
          <p class="ml-4 mt-4 font-weight-light body-2">{{note.note}}</p>
          <v-btn fab depressed small dark text right href="" @click="deleteNotes(note._id)"><v-icon small>fa-trash</v-icon></v-btn>
          
          <v-dialog max-width="600px" v-model="dialog">
          <template v-slot:activator="{on}">
          <v-btn fab depressed small dark text right v-on="on" @click="editnotes(note._id)"><v-icon small>fa-edit</v-icon></v-btn>
          </template>
          <v-card class="grey lighten-1">
            <v-card-title>
                <h3>Edit Notes</h3>
            </v-card-title>
            <v-card-text>
                <v-form ref="form">
                    <v-text-field label="Judul Catatan" v-model="titlee" prepend-icon="fa-folder" :rules="inputRules"></v-text-field>
                    <v-textarea label="Isi Catatan" v-model="notee" prepend-icon="fa-edit" :rules="inputRules"></v-textarea>
                    <v-btn class="green darken-4 white--text mx-0 mt-3" :loading="loadingg" @click="saveedit()">Edit Catatan</v-btn>
                </v-form>
            </v-card-text>
           </v-card>
        </v-dialog>
      </v-card>
</div>
</template>

<script>
import axios from 'axios';

export default {
    name:'ListNotes',
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
    async editnotes(id){
      this.id = id;
      this.dialog = true;
      await axios.get(this.url+"?id="+id).then((res)=>{
        this.titlee = res.data.data.title;
        this.notee = res.data.data.note;
      }).catch((err)=>{
        return err;
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
      }).catch((err)=>{
        return err;
      });
      await this.getAllNotes();
    }
  },
  async created(){
    await this.getAllNotes()
  }
}
</script>

<style scoped>
    .rounded-corner{
        border-radius: 20px !important;
    }
</style>