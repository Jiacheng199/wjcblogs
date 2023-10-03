<template>
    <div class="container">
        <div class="pic">
            <div class="image-container">
                <img src="../../public/imgs/home-page-img.png" alt="Description">
            </div>
        </div>
        <div class="name">
            <h1 class="name-display">
                <p class="name-display-p">Hi, I'm <span style="color: #00bfa5;">Jiacheng Wang.</span></p>
                </h1>
            <div class="self-introduction">
                <p>I'm a software engineer based in Melbourne City.</p>
                <p>I'm passionate about making crazy and inspiring ideas come to life through programming!</p>
                <p>Currently working on: <a style="color: #00bfa5;">Melbourne TreeHole</a> 
                  and <a style="color: #00bfa5;">Exchange Everything</a>.</p>
            </div>
            <button @click="emailMe">Email Me !</button>
        </div>
    </div>

</template>

<script>
// import anime from 'animejs';

export default {
    name: 'HomePage',
    methods: {
        emailMe() {
            window.open('mailto:jiacheng.develop@gmail.com');
        },
    },
}

</script>

<style scoped>.container {
    display: flex;
    height: 90vh;
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

  button {
    margin-top: 100px;
    padding: 23px 40px;
    font-size: 29px;
    font-weight: 450;
    color: #e7e2e2;
    background-color: #81905F; 
    border: none;
    border-radius: 30px;
    cursor: pointer;
  }

  button:hover {
    background-color: #0aae5c; 
  }
  
  .name-display-p {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    animation: 
        typing 5s,
        cursor .4s step-end infinite alternate;
  }
  
  @keyframes cursor {
      50% { border-right: 2px solid #00bfa5; }
  }

  @keyframes typing {
    from { width: 0 }
  }



</style>