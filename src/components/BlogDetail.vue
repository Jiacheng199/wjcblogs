<template>
  <div class="blog-detail max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-24">
    <h1 class="text-3xl font-bold text-gray-900 mb-6">{{ blog.Title }}</h1>
    <h3 class="text-lg text-gray-600 mb-4">By {{ blog.Author }}</h3>
    <div class="prose custom-prose max-w-none" v-html="blog.Content"></div>
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
/* Custom prose styles */
.custom-prose p {
  font-weight: 500; 
  font-size: 1.1rem; /* Slightly larger font for better readability */
  line-height: 1.75; /* Increased line height for better text spacing */
  margin-bottom: 1.25rem; /* Increased bottom margin to add more space between paragraphs */
}

.custom-prose h1,
.custom-prose h2,
.custom-prose h3,
.custom-prose h4,
.custom-prose h5,
.custom-prose h6 {
  font-weight: 600; 
  line-height: 1.4; /* Better line height for headings */
  margin-top: 1.5rem; /* Add space above headings */
  margin-bottom: 1rem; /* Add space below headings */
}

.custom-prose h1 {
  font-size: 2.25rem; /* Larger font size for h1 */
}

.custom-prose h2 {
  font-size: 1.875rem; /* Large font size for h2 */
}

.custom-prose h3 {
  font-size: 1.5rem; /* Slightly smaller font size for h3 */
}

.custom-prose h4 {
  font-size: 1.25rem; /* Smaller font size for h4 */
}

.custom-prose ul, 
.custom-prose ol {
  padding-left: 1.5rem; /* Indent lists slightly */
  margin-bottom: 1.25rem; /* Add space below lists */
}

.custom-prose li {
  margin-bottom: 0.5rem; /* Add space between list items */
}

.custom-prose blockquote {
  font-style: italic;
  padding-left: 1.25rem;
  border-left: 4px solid #00bfa5; /* Add a teal border for blockquotes */
  margin-bottom: 1.5rem;
  color: #555; /* Softer text color for blockquotes */
}
</style>
