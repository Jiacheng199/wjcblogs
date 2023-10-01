<template>
    <form @submit.prevent="submitForm">
      <input type="email" v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      async submitForm() {
        try {
          const response = await axios.post('http://13.238.142.58:3000/users', {
            email: this.email,
            password: this.password
          })
  
          console.log(response.data)
        } catch (error) {
          console.error(error)
        }
      }
    }
  }
  </script>
  
  <style scoped>

  </style>
  