<template>
    <div class="blogs">
        <div class="blog" v-for="blog in blogs" :key="blog.blog_id" @click="goToBlogDetail(blog.blog_id)">
            <h2>{{ blog.title }}</h2>
            <p>{{ blog.content }}</p>
        </div>
    </div>
</template>



<script>
import axios from 'axios';

export default {
    name: 'MyBlogs',
    //return blogs array for vue to render
    data() {
        return {
            blogs: []
        }
    },

    methods: {
        async fetchBlogs() {
        try {
            const response = await axios.get('http://localhost:3000/readblogs');
            this.blogs = response.data;
        } catch (error) {
            console.error("Failed to fetch blogs:", error);
        } 
        },

        goToBlogDetail(blogId) {
            this.$router.push({ name: 'BlogDetail', params: { id: blogId } });
        },
    },

    created() {
        this.fetchBlogs();
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
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1); 
}

.blog:first-child {
    margin-top: 0;
}


.blog:last-child {
    margin-bottom: 0;
}

.blog h2 {
    font-size: 24px;
    margin-bottom: 10px;
    font-weight: bold;
}

.blog p {
    font-size: 16px; 
    color: #555; 
    line-height: 1.5; 
}

</style>
