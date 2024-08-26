<template>
    <div class="blogs">
        <div class="blog" v-for="blog in blogs" :key="blog.BlogID">
            <h1>{{ blog.Title }}</h1>
            <h3>{{ blog.Author }}</h3>
            <button @click="deleteButton(blog.BlogID)">Delete</button>
        </div>
        <button class="back-button" @click="goBack()">Back</button>

    </div>
</template>

<script>
import { fetchBlogs } from '@/api/blogs/fetchBlogs';
import { deleteBlog } from '@/api/blogs/deleteBlog';

export default {
    name: 'BlogsManagement',
    data() {
        return {
            blogs: []
        }
    },
    async created() {
        this.blogs = await fetchBlogs();
    },
    methods: {
        async deleteButton(id){
            try{
                const response = await deleteBlog(id);
                console.log(response);
                this.blogs = this.blogs.filter(blog => blog.BlogID !== id);

            }catch (error){
                console.log(error);
            }
        },
        goBack() {
            if (this.$route.query.from) {
                this.$router.push(this.$route.query.from);
            } else {
                this.$router.push('/AdminPage');
            }
        }
    }

}
</script>

<style scoped>
.blogs {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #2c3e50;
    padding: 20px;
    border-radius: 10px;
    width: 90%;
    max-width: 800px;
    margin: 20px auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    color: #ecf0f1;
}

.blog {
    border-bottom: 1px solid #7f8c8d;
    padding: 10px;
    width: 100%;
}

.blog:last-child {
    border-bottom: none;
}

.blog h1 {
    font-size: 1.5em;
    margin-bottom: 0.5em;
}

.blog h3 {
    font-size: 1em;
    color: #bdc3c7;
}

button {
    padding: 10px 20px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #2980b9;
}

.back-button {
    margin-top: 20px;
    background-color: #e74c3c;
}

.back-button:hover {
    background-color: #c0392b;
}
</style>
