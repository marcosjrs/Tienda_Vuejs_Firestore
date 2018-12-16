<template>
  <main>
    <v-app>

      <v-content v-if="$store.state.loaded"> 

        <guest-navigation v-if="role === 'guest'" />  <!-- 'guest' es por defecto-->
        <admin-navigation v-if="role === 'admin'" /> <!-- tuvimos que modificar, poniendole el role admin a, un usuario que ya teniamos registrado en la base de datos de firebase -->

        <v-container class="mt-5 mb-5">
          <v-alert :type="$store.state.alert.type" :value="$store.state.alert.show">
            {{ $store.state.alert.message }}
          </v-alert>
          <router-view />
        </v-container>

        <Footer />

      </v-content>

      <v-container v-else fill-height>
        <v-layout flex align-center justify-center>
          <v-progress-circular indeterminate :size="100" :width="10" color="purple" />
        </v-layout>
      </v-container>

    </v-app>
  </main>
</template>

<script>

import GuestNavigation from '@/components/navigations/guest';
import AdminNavigation from '@/components/navigations/admin';
import Footer from '@/components/footer/Footer';
import {mapGetters} from 'vuex';

export default {
  name: 'App',
  components: {
    GuestNavigation,
    AdminNavigation,
    Footer
  }, 
  computed: {
    ...mapGetters(['role']) //De todos los getters solo cogerá este y lo expondrá como si fuera un this.role
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
