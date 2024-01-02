<template>
    <div>
        <h1>Blog upload</h1>
        <input type="text" v-model="title" placeholder="Title" class="title">
        <input type="text" v-model="author" placeholder="Author" class="author">
        <quill-editor v-model="editorHtml"></quill-editor>
        <button @click="Upload">Upload</button>
        <button @click="logout">Logout</button>
    </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'  // import styles
import 'quill/dist/quill.bubble.css'
import axios from 'axios';
const backendUrl = process.env.VUE_APP_BACKEND_URL;
export default {
    name: 'AdminPage',
    components: {
        quillEditor
    },
    data() {
        return {
            editorHtml: '',
            title: '',
            author: ''
        }
    },
    methods: {
        //clear the session storage and redirect to the home page when logout
        logout() {
            sessionStorage.removeItem('admin');
            this.$router.push({ name: 'HomePage' });
        },
        async Upload() {
            try {
                const response = await axios.post(`${backendUrl}/uploadblog`, 
                { title: this.title, author: this.author, content: this.editorHtml });
                console.log(response.data);
            } catch (error) {
                console.error('Error uploading content:', error);
            }
        }
    }
}
</script>

<style scoped>
h1 {
    text-align: center;
    color: brown;
}

.title {
    width: 50%;
    height: 20px;
    margin: 0 auto;
    display: block;
    margin-bottom: 2%;
}

.author {
    width: 50%;
    height: 20px;
    margin: 0 auto;
    display: block;
    margin-bottom: 2%;
}

button {
    width: 20%;
    height: 25px;
    margin: 0 auto;
    display: block;
    margin-bottom: 2%;
}



</style>
