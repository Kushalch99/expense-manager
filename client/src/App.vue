<template>
  <v-app class="app">
    <navbar name="kushal"/>
    <v-container class="fill-height" fluid>
      <router-view />
    </v-container>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  components: {
    Navbar
  },
  data(){
    return {
      drawer: true,
      name: 'Kushal'
    }
  }
}
</script>
<style scoped>
.app {
  height: 100%;
}
</style>
