<template>
    <div class="blog-detail">
      <h1>{{ blog.Title }}</h1>
      <h3>{{ blog.Author }}</h3>
      <div v-html="blog.Content"></div>
    </div>
  </template>

<script>
import { fetchBlogByID } from '@/api/blogs/fetchBlogs';

export default {
    name: 'MyBlogs',
    data() {
        return {
            blog: {}
        }
    },
    async created() {
      this.blog = await fetchBlogByID(1);
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