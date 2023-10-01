<template>
  <form @submit.prevent="submitForm">
    <input type="email" v-model="email" placeholder="Email" />
    <input type="password" v-model="password" placeholder="Password" />
    <button type="submit">Login</button>
    <button type="button" @click="goToRegister">Register</button>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async submitForm() {
      try {
         const response = await axios.post('http://13.238.142.58:3000/userlogin', {
          email: this.email,
          password: this.password
        })

        console.log(response.data)
        // TODO: 处理响应数据，如设置认证状态或者跳转到新页面
      } catch (error) {
        console.error(error)
        // TODO: 处理错误，如显示错误信息
      }
    },

    goToRegister(){
      this.$router.push('/register')
    }

  }
}
</script>

<style scoped>
</style>
