<template>
    <div class="flex justify-center  min-h-screen">
      <div class="blogs max-w-6xl w-full p-8 mt-3 rounded-lg">
        <div 
          class="blog mb-12 cursor-pointer transition transform hover:scale-105 hover:shadow-lg" 
          v-for="blog in blogs" 
          :key="blog.BlogID" 
          @click="goToBlogDetail(blog.BlogID)">
          <h2 class="text-2xl font-bold mb-2">{{ blog.Title }}</h2>
          <h3 class="text-xs font-bold text-gray-600">{{ blog.Author }}</h3>
        </div>
      </div>
    </div>
  </template>

<script>
import { fetchBlogs } from '@/api/blogs/fetchBlogs';

export default {
    name: 'MyBlogs',
    data() {
        return {
            blogs: []
        }
    },

    methods: {
        goToBlogDetail(blogId) {
            this.$router.push({ name: 'BlogDetail', params: { id: blogId } });
        },
    },

    async created() {
        this.blogs = await fetchBlogs();
    }
}
</script>

<style src="@/assets/output.css"></style>

