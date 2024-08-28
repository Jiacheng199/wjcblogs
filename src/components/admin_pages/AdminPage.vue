<template>
    <div class="admin-container flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <h1 class="text-4xl font-bold text-brown-600 mb-8">Admin</h1>
      <button @click="upload" class="w-3/4 md:w-1/2 py-3 bg-teal-500 text-white rounded-lg mb-4 hover:bg-teal-600 transition duration-300">Upload</button>
      <button @click="blogsManagement" class="w-3/4 md:w-1/2 py-3 bg-blue-500 text-white rounded-lg mb-4 hover:bg-blue-600 transition duration-300">Blogs Management</button>
      <button @click="logout" class="w-3/4 md:w-1/2 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300">Logout</button>
    </div>
  </template>
  
  <script>
  export default {
      name: 'AdminPage',
      methods: {
          upload() {
              this.$router.push({ name: 'UploadBlog' });
          },
          blogsManagement() {
              this.$router.push({ name: 'BlogsManagement' });
          },
          logout() {
              sessionStorage.clear();
              this.$router.push({ name: 'HomePage' });
          }
      }
  }
  </script>
  
  <style scoped>
  /* All styles are handled by Tailwind CSS classes in the template */
  </style>
  