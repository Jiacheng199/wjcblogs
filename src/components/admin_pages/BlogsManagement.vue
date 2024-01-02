<template>
    <div class="blogs">
        <div class="blog" v-for="blog in blogs" :key="blog.blog_id">
            <h1>{{ blog.title }}</h1>
            <h3>{{ blog.author }}</h3>
            <button @click="deleteBlog(blog.blog_id)">Delete</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
const backendUrl = process.env.VUE_APP_BACKEND_URL;

export default {
    name: 'MyBlogs',
    data() {
        return {
            blogs: []
        }
    },
    created() {
        this.fetchBlogs();
    },
    methods: {

        //fetch blogs from backend
        fetchBlogs() {
            axios.get(`${backendUrl}/readblogs`)
            .then(response => {
                this.blogs = response.data;
            })
            .catch(error => {
                console.error("Failed to fetch blogs:", error);
            });
        },


        //delete blog by id
        deleteBlog(blogId) {
            axios.delete(`${backendUrl}/deleteblog/${blogId}`)
            .then(response => {
                console.log(response.data);
                this.fetchBlogs();
            })
            .catch(error => {
                console.error("Failed to delete blog:", error);
            });
        }

    }
}
</script>

<style scoped>
.blogs {
    border-radius: 10px;
    background-color: #ffc10731;
    padding: 2%;
    width: 100%;
    margin: 5% auto;
    display: block;
    text-align: left;
}

button {
    width: 20%;
    height: 25px;
    margin-left: 60%;
    display: block;
}

</style>
