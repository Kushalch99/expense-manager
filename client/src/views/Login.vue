<template>
  <v-card 
    elevation="2"
    outlined
    style="width: 40%; margin:30px auto; padding: 20px 20px;">
    <auth-form :isLogin="true"/>
    <p>New User? <router-link to="/signup">Signup</router-link></p>
  </v-card>
</template>
<script>
import AuthForm from '@/components/AuthForm.vue'
export default {
  name: 'Login',
  components: {
    AuthForm
  }
}
</script>
