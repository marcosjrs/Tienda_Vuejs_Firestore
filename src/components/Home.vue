<template>
  <v-jumbotron
    color="grey lighten-2"
  >
    <v-container fill-height >
      <v-layout align-center>
        <v-flex>
          <h3 class="display-3">
            {{ $t('welcome.title', {app: 'Vuejs 2 + Firestore'}) }} <!-- le pasa el objeto a la traduccion, porque en la traducción pone:  welcome: { title: 'Bienvenido a {app}', ... -->
          </h3>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
</template>

<script>
	export default {
	  name: 'home'
  }
</script>
