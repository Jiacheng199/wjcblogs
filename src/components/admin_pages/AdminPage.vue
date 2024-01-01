<template>
    <div class="admin-container">
        <h1>Admin Features</h1>
        <button @click="upload">Upload</button>
        <button @click="blogsManagement">Blogs Management</button>
        <button @click="logout">Logout</button>
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
            this.$router.push({ name: 'MyBlogs' });
        },
        //clear the session storage and redirect to the home page when logout
        logout() {
            sessionStorage.removeItem('admin');
            this.$router.push({ name: 'HomePage' });
        }
    }
}
</script>

<style scoped>
h1 {
    text-align: center;
    color: brown;
}

button {
    width: 50%;
    height: 50px;
    margin: 0 auto;
    display: block;
    margin-bottom: 2%;
}

</style>