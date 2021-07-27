<template>
  <v-app class="app">
    <v-content class="fill-height" fluid>
      <navbar name="kushal"/>
      <router-view />
    </v-content>
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
