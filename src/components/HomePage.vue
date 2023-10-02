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
            <button @click="emailMe">Email Me !</button>
        </div>
    </div>

</template>

<script>
export default {
    name: 'HomePage',
    methods: {
        emailMe() {
            window.open('mailto:jiacheng.develop@gmail.com');
        }
    }
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
    width: 60%;  
    max-width: 60%; 
    max-height: 60%;  
  }
  
  .image-container img {
    width: 100%; 
    height: auto; 
    display: block;  
    object-fit: cover;  
  }

  .self-introduction {
    margin-top: 20px;
    font-size: 32px;
    font-weight: 600;
    line-height: 1.5;
    text-align: center;
  }

  h1{
    font-size: 60px;
    font-weight: 600;
    line-height: 1.5;
    text-align: center;
  }

  button {
    margin-top: 100px;
    padding: 23px 40px;
    font-size: 29px;
    font-weight: 450;
    color: #ffffff;
    background-color: #81905F; /* 抹茶色 */
    border: none;
    border-radius: 30px;
    cursor: pointer;
}

button:hover {
    background-color: #11b663;  /* 深一点的抹茶色 */
}
</style>