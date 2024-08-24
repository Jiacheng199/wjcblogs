<template>
    <div>
        <h1>Blog upload</h1>
        <input type="text" v-model="blog.Title" placeholder="Title" class="title">
        <input type="text" v-model="blog.Author" placeholder="Author" class="author">
        <quill-editor v-model="blog.Content"></quill-editor>
        <button @click="upload">Upload</button>
    </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'  // import styles
import 'quill/dist/quill.bubble.css'
import { uploadBlog } from '@/api/blogs/uploadBlog' //blog upload api
import {v4 as uuidv4} from 'uuid'

export default {
    name: 'AdminPage',
    components: {
        quillEditor
    },
    data() {
        return {
            blog: {
                BlogID: '',
                Title: '',
                Author: '',
                Content: '',
            },
            error: null,
        }
    },
    methods: {
        async upload(){
            try{
                //generate new id for new blog
                this.blog.BlogID = uuidv4();
                const response = await uploadBlog(this.blog);
                console.log("Upload success:", response);
            }catch (error){
                console.log("Unable to upload blog", error);
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
