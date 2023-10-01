<!-- src/components/NavigationBar -->
<template>
    <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/AboutMe">AboutMe</router-link>
        <router-link to="/PortfolioPage">Portfolio</router-link>
        <router-link to="/MyBlogs">MyBlogs</router-link>
    </nav>
</template>

<script>
export default {
    name: 'NavigationBar',
}
</script>

<style scoped>
nav {
    display: flex;
    justify-content: space-around;
    padding: 10px;
    background-color: #eee;
}    
</style>

