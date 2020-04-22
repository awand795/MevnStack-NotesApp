<template>
<nav>

  <v-app-bar dark class="green darken-4" app>
    <v-app-bar-nav-icon @click="drawer =! drawer"></v-app-bar-nav-icon>
    <h1 class="ml-2 display-1">MyNotes</h1>
    <v-spacer></v-spacer>
    <v-btn text href="" target="_blank">
      <span class="mr-2">Source Code</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" app class="green lighten-4">
    <v-list dense v-for="menu in menus" :key="menu.text">
      <v-list-item router :to="menu.route" link>
        <v-list-item-action>
          <v-icon>{{menu.icons}}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{menu.text}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

</nav>

</template>

<script>
  export default {
    name: 'NavBar',
    data: () => ({
      drawer:false,
      menus:[
        {text:"Home",icons:"mdi-home",route:"/"},
        {text:"Daftar Catatan",icons:"mdi-notes",route:"/ListNotes"},
        {text:"Tambah Catatan",icons:"mdi-edit",route:"/NewNotes"}
      ]
    }),
  }
</script>
