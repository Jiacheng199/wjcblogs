<template>
  <!-- NavigationBar -->
  <nav class="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white shadow rounded-full px-8 py-2 z-50">
    <div v-show="showMenu" class="flex space-x-8 justify-center items-center">
      <router-link
        to="/"
        class="flex items-center space-x-2 text-gray-700 hover:text-black transition-colors duration-300 font-medium"
        active-class="text-black font-bold border-b-2 border-black"
        exact
      >
        <i class="fas fa-home"></i>
      </router-link>
      <router-link
        to="/PortfolioPage"
        class="text-gray-700 hover:text-black transition-colors duration-300 font-semibold"
        active-class="text-black font-bold border-b-2 border-black"
      >
        Projects
      </router-link>
      <router-link
        to="/MyBlogs"
        class="text-gray-700 hover:text-black transition-colors duration-300 font-semibold"
        active-class="text-black font-bold border-b-2 border-black"
      >
        Blogs
      </router-link>
      <router-link
        to="/AboutMe"
        class="text-gray-700 hover:text-black transition-colors duration-300 font-semibold"
        active-class="text-black font-bold border-b-2 border-black"
      >
        About
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavigationBar",
  data() {
    return {
      showMenu: true, // Controls the visibility of the menu
    };
  },
};
</script>


<style src="@/assets/output.css"></style>
