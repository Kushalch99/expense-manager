<template>
  <v-card 
    elevation="2"
    outlined
    style="width: 40%; margin:30px auto; padding: 20px 20px;">
    <auth-form :isLogin="false"/>
    <p style="margin-top: 10px">Already have an account? <router-link to="/login">Login</router-link></p>
  </v-card>
</template>
<script>
import AuthForm from '@/components/AuthForm.vue'
export default {
  name: 'Signup',
  components: {
    AuthForm
  }
}
</script>
