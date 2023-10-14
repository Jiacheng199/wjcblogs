<!-- src/components/NavigationBar -->
<template>
    <!-- NavigationBar -->
    <nav>
        <div v-show="showMenu" class="menu">
            <router-link to="/">Home</router-link>
            <router-link to="/AboutMe">AboutMe</router-link>
            <router-link to="/PortfolioPage">Portfolio</router-link>
            <router-link to="/MyBlogs">MyBlogs</router-link>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavigationBar',

    data() {
        return {
            showMenu: true,
        }
    },
    methods: {
        toggleMenu() {
            console.log("toggleMenu");
            this.showMenu = !this.showMenu;
        }
    }
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
    transform: scale(1.1);
}


.menu {
    display: flex;
    justify-content: center;
}

@media (max-width: 768px) {
    .menu {
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    nav a {
        margin: 10px 0;
        font-size: 25px;
    }
}

</style>

