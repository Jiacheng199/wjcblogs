<template>
  <div class="container mx-auto flex flex-col md:flex-row items-center justify-center py-12">
    <div class="pic flex-1 flex justify-center">
      <div class="image-container w-3/4 max-w-md">
        <img src="/imgs/home-page-img.png" alt="Description" class="w-full h-auto object-cover rounded-lg shadow-lg">
      </div>
    </div>
    <div class="name flex-1 flex flex-col items-center text-center mt-8 md:mt-0">
      <h1 class="text-4xl font-bold mb-4">Hi, I'm <span class="text-teal-500">Jiacheng.</span></h1>
      <div class="self-introduction text-lg font-semibold leading-relaxed">
        <p>I'm a software engineer based in Melbourne City.</p>
        <p>I'm passionate about making crazy and inspiring ideas come to life through programming!</p>
        <p>Currently working on: 
          <a href="#" class="text-teal-500 hover:underline">Melbourne TreeHole</a> 
          and 
          <a href="#" class="text-teal-500 hover:underline">Exchange Everything</a>.
        </p>
      </div>
      <button @click="emailMe" class="mt-12 px-8 py-4 text-lg font-medium text-white bg-green-700 rounded-full hover:bg-teal-600 transition-colors duration-300">Email Me!</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    emailMe() {
      window.open('mailto:jiacheng.develop@gmail.com');
    },
  },
}
</script>

<style scoped>
/* Tailwind CSS classes are applied directly in the template */
</style>
