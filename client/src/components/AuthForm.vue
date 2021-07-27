<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-if="!isLogin"
      v-model="name"
      :rules="[v => !!v || 'Name should not be empty']"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="userName"
      :rules="[v => !!v || 'Username should not be empty']"
      label="UserName"
      required
    ></v-text-field>
    
    <v-text-field
      v-model="password"
      label="Password"
      type="password"
      :rules="[v => !!v || 'Password should not be empty']"
      required
    ></v-text-field>
    <v-row>
        <v-btn
        :disabled="!valid"
        style="margin: 10px auto;"
        color="success"
        @click="submit"
      >
        {{ isLogin? 'Login' : 'Signup' }}
      </v-btn>
    </v-row>
  </v-form>
</template>

<script>
export default {
  name: 'AuthForm',
  props:{
    isLogin: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      valid: false,
      name: '',
      userName: '',
      password: ''
    }
  },
  methods: {
    submit(){
      let isValid =  this.$refs.form.validate()
      if(!isValid)
        alert('not valid')
    }
  }
}
</script>
