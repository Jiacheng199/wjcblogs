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
    width: 100%;
    display: flex;
    justify-content: center;
}

nav a {
    text-decoration: none;
    color: inherit;
    margin: 0 60px;
    font-size: 35px;
    font-weight: 500;
}

nav :hover {
    color: #28887b;
    font-weight: 600;

}



</style>

