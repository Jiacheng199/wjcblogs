<template>
    <div class="blog-detail">
      <h1>{{ blog.title }}</h1>
      <h3>{{ blog.author }}</h3>
      <p>{{ blog.content }}</p>
    </div>
  </template>

<script>
import axios from 'axios';
const backendUrl = process.env.VUE_APP_BACKEND_URL;
export default {
    name: 'MyBlogs',
    data() {
        return {
            blog: {}
        }
    },
    created() {
        const blogId = this.$route.params.id;
        axios.get(`${backendUrl}/readblog/${blogId}`)
        .then(response => {
            this.blog = response.data[0]; // 如果API返回一个数组
        })
        .catch(error => {
            console.error("Failed to fetch blog detail:", error);
        });
}

}
</script>

<style scoped>
.blog-detail {
  padding: 30px;
  width: 100%;
  margin: 0 auto;
}
</style>