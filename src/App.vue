<template>
  <main>
    <v-app>

      <v-content > 
        <guest-navigation /> <!-- en el futuro solo se mostrará en usuarios tipo guest -->
        <v-container class="mt-5 mb-5">
          <router-view />
        </v-container>
      </v-content>

    </v-app>
  </main>
</template>

<script>

import GuestNavigation from '@/components/navigations/guest';

export default {
  name: 'App',
  components: {
    GuestNavigation
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
