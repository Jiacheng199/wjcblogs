<template>
    <div class="blogs">
        <div class="blog" v-for="blog in blogs" :key="blog.blog_id">
            <h1>{{ blog.title }}</h1>
            <h3>{{ blog.author }}</h3>
            <div v-html="blog.content"></div>
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

.blog {
    margin-bottom: 50px;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
}

.blog:hover {
    transform: scale(1.05);
    box-shadow: 0 0 11px rgba(33,33,33,.2);
}

.blog:first-child {
    margin-top: 0;
}

.blog:last-child {
    margin-bottom: 0;
}

.blog h1 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 2%;
}

.blog h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 2%;
}

.blog button {
    width: 20%;
    height: 25px;
    margin: 0 auto;
    display: block;
    margin-bottom: 2%;
}

</style>
