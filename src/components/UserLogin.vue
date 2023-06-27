<!-- src/components/UserLogin.vue -->
<template>
    <form @submit.prevent="submitForm">
      <input type="email" v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      submitForm() {
        // 在这里处理表单提交
      }
    }
  }
  </script>
  