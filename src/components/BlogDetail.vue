<template>
  <div class="blog-detail max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
    <h1 class="text-3xl font-bold text-gray-900 mb-6">{{ blog.Title }}</h1>
    <h3 class="text-lg text-gray-600 mb-4">By {{ blog.Author }}</h3>
    <div class="prose max-w-none" v-html="blog.Content"></div>
  </div>
</template>


<script>
import { fetchBlogByID } from '@/api/blogs/fetchBlogs';

export default {
  name: 'BlogDetail',

  data() {
    return {
      blog: {}
    }
  },

  async created() {
    const blogId = this.$route.params.id;
    this.blog = await fetchBlogByID(blogId);
  },

}
</script>

<style scoped>
/* Tailwind CSS classes are applied directly in the template */
</style>
