<template>
  <div id="app">
    <NavigationBar/>
    <router-view/>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue'

export default {
  name: 'App',
  components: {
    NavigationBar
  }
}
</script>

<style>
#app {
  font-family: 'Tensor Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@font-face {
    font-family: 'Tensor Sans';
    src: url('../public/fonts/TenorSans-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}
</style>
