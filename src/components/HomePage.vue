<template>
    <div class="container">
        <div class="pic">
            <div class="image-container">
                <img src="../../public/imgs/home-page-img.png" alt="Description">
            </div>
        </div>
        <div class="name">
            <h1>Hi, I'm <span style="color: #00bfa5;">Jiacheng Wang</span></h1>
            <div class="self-introduction">
                <p>I'm a software engineer based in Melbourne City.</p>
                <p>I'm passionate about building software that improves people's lives.</p>
                <p>I'm currently working at <a href="https://www.etsy.com/" target="_blank">Etsy</a>.</p>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'HomePage',
}
</script>

<style scoped>.container {
    display: flex;
    height: 100vh;
  }
  
  .pic,
 .name {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
  
  .image-container {
    width: 50%;  
    max-width: 50%; 
    max-height: 50%;  
  }
  
  .image-container img {
    width: 100%; 
    height: auto; 
    display: block;  
    object-fit: cover;  
  }
</style>