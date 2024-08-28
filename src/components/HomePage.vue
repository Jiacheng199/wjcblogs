<template>
  <div>
    <!-- Personal Introduction Section -->
    <div class="container mx-auto flex flex-col md:flex-row items-center justify-center py-12 mt-8">
      <div class="pic flex-1 flex justify-center items-center">
        <div class="image-container w-5/6">
          <img src="self-pic/self-ai-pic.png" alt="Description" class="w-full h-auto object-cover rounded-lg shadow-lg">
        </div>
      </div>
      <div class="name flex-1 flex flex-col items-center text-center mt-8 md:mt-0">
        <h1 class="text-4xl font-bold mb-4 typing-animation"></h1>
        <div class="self-introduction text-lg font-semibold leading-relaxed">
          <p>I'm a software engineer specializing in Machine Learning and Natural Language Processing.</p>
          <p>I thrive on creating innovative solutions that leverage AI to solve real-world problems.</p>
        </div>
        <div class="flex space-x-4 mt-12">
          <a href="mailto:jiacheng.develop@gmail.com" class="px-8 py-4 text-lg font-medium text-white bg-green-700 rounded-full hover:bg-green-600 transition-colors duration-300">
            <i class="fas fa-envelope"></i> Email
          </a>
          <a href="https://github.com/jiacheng199" target="_blank" class="px-8 py-4 text-lg font-medium text-white bg-gray-800 rounded-full hover:bg-gray-600 transition-colors duration-300">
            <i class="fab fa-github"></i> GitHub
          </a>
          <a href="https://www.linkedin.com/in/jiacheng-wang-36235824b/" target="_blank" class="px-8 py-4 text-lg font-medium text-white bg-blue-700 rounded-full hover:bg-blue-500 transition-colors duration-300">
            <i class="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </div>
    </div>

    <!-- Recent Posts Section -->
    <div class="container mx-auto max-w-5xl p-8 mt-12">
      <div class="recent-posts mb-8">
        <div class="flex justify-between items-center mb-4 border-b border-gray-700">
          <h2 class="text-xl font-extrabold">Recent Posts</h2>
          <router-link to="/MyBlogs" class="text-sm text-gray-600 hover:text-black">All posts »</router-link>
        </div>
        <ul class="space-y-4">
          <li v-for="blog in blogs.slice(0, 5)" :key="blog.BlogID" class="flex justify-between items-center border-b border-gray-400">
            <div>
              <span class="text-xs text-gray-500">{{ blog.Date }}</span>
              <router-link :to="{ name: 'BlogDetail', params: { id: blog.BlogID }}" class="text-base text-black hover:underline">{{ blog.Title }}</router-link>
            </div>
            <div class="flex space-x-2">
              <span v-for="tag in blog.Tags" :key="tag" class="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">{{ tag }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchBlogs } from '@/api/blogs/fetchBlogs';

export default {
  name: 'HomePage',
  data() {
    return {
      blogs: [] 
    };
  },
  mounted() {
    this.typingEffect();
    this.fetchBlogs(); 
  },
  methods: {
    typingEffect() {
      const text = "Hi, I'm Jiacheng.";
      const typingElement = document.querySelector('.typing-animation');
      let i = 0;

      const type = () => {
        if (i < text.length) {
          typingElement.innerHTML += text.charAt(i);
          i++;
          setTimeout(type, 100);
        }
      };

      type();
    },
    async fetchBlogs() {
      const fetchedBlogs = await fetchBlogs();
      this.blogs = fetchedBlogs;
    }
  }
}
</script>

<style scoped>
/* Typing animation styling */
.typing-animation {
  color: #5bbdb0; 
  white-space: nowrap;
  border-right: 2px solid;
  border-color: #00bfa5; 
  animation: blink-caret 0.75s step-end infinite;
}

@keyframes blink-caret {
  from, to { border-color: transparent; }
  50% { border-color: black; }
}

/* Additional styles for the image */
.image-container {
  position: relative;
  padding-bottom: 100%;
  overflow: hidden;
}

.image-container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 90%;
  height: 90%;
  object-fit: cover;
  border-radius: 50%;
}
</style>
