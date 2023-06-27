<!-- src/components/UserLogin.vue -->
<template>
    <form @submit.prevent="submitForm">
      <input type="email" v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    // ...
    methods: {
      async submitForm() {
        try {
           const response = await axios.post('http://localhost:3000/userlogin', {
            email: this.email,
            password: this.password
          })
  
          console.log(response.data)
          // TODO: 处理响应数据，如设置认证状态或者跳转到新页面
        } catch (error) {
          console.error(error)
          // TODO: 处理错误，如显示错误信息
        }
      }
    }
  }
  </script>
  
  <style scoped>
  form {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 0 auto;
  }

  input {
    margin-bottom: 10px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  button {
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
    background-color: #eee;
    cursor: pointer;
  }
  </style>
  