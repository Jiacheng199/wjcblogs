<template>
    <div>
        <h1>Admin Page</h1>
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
// import axios from 'axios';

export default {
    name: 'AdminPage',
    components: {
        quillEditor
    },
    data() {
        return {
            editorHtml: ''
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
                console.log(this.editorHtml);
            } catch (error) {
                console.error('Error uploading content:', error);
            }
        }
    }
}
</script>

<style scoped>
</style>
