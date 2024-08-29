<template>
  <div class="flex justify-center min-h-screen mt-24">
    <div class="blogs max-w-6xl w-full p-8 rounded-lg space-y-8">
      <div 
        class="blog p-6 bg-white rounded-lg shadow-md cursor-pointer transition transform hover:scale-105 hover:shadow-xl hover:border-teal-500 hover:bg-teal-50 border-l-4 border-transparent" 
        v-for="blog in blogs" 
        :key="blog.BlogID" 
        @click="goToBlogDetail(blog.BlogID)">
        <h2 class="text-2xl font-bold mb-2 text-gray-900">{{ blog.Title }}</h2>
        <h3 class="text-xs font-bold text-gray-600">{{ blog.Author }}</h3>
        <p class="text-sm text-gray-700 mt-4">{{ blog.Excerpt }}</p>
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

<style scoped></style>
