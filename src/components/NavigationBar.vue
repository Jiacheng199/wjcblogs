<!-- src/components/NavigationBar -->
<template>
    <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/register">Register</router-link>
        <router-link to="/login">Login</router-link>
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

