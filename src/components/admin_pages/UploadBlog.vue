<template>
    <div>
        <div class="upload-container">
            <h1>Blog upload</h1>
            <input type="text" v-model="blog.Title" placeholder="Title" class="title">
            <input type="text" v-model="blog.Author" placeholder="Author" class="author">
            <div class="editor-container">
                <quill-editor v-model="blog.Content"></quill-editor>
            </div>
        </div>
        <div class="button-container">
            <button class="upload-button" @click="upload">Upload</button>
            <button class="back-button" @click="goBack()">Back</button>
        </div>
    </div>
</template>


<script>
import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'  // import styles
import 'quill/dist/quill.bubble.css'
import { uploadBlog } from '@/api/blogs/uploadBlog' //blog upload api
import { v4 as uuidv4 } from 'uuid'

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
        async upload() {
            try {
                //generate new id for new blog
                this.blog.BlogID = uuidv4();
                const response = await uploadBlog(this.blog);
                console.log("Upload success:", response);
            } catch (error) {
                console.log("Unable to upload blog", error);
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
.upload-container {
    width: 80%;
    margin: 0 auto;
    padding: 20px;
}

h1 {
    text-align: center;
    color: brown;
}

.title,
.author {
    width: 100%;
    height: 30px;
    margin-bottom: 15px;
    padding: 5px;
}

.editor-container {
    margin-bottom: 20px;
}

.quill-editor {
    height: 40vh;
    min-height: 300px;
}

.button-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 40px;
}

.upload-button,
.back-button {
    width: 150px;
    height: 40px;
    cursor: pointer;
    border-radius: 5px;
}

.upload-button {
    background-color: #2ecc71;
    color: white;
    border: none;
}

.back-button {
    background-color: #e74c3c;
    color: white;
    border: none;
}
</style>