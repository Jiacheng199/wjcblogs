<template>
    <div>
        <h1>Admin Page</h1>
        <quill-editor v-model="editorHtml"></quill-editor>
        <p>Admin page goes here.</p>
        <button @click="logout">Logout</button>
    </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'  // import styles
import 'quill/dist/quill.bubble.css'

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
        logout() {
            localStorage.removeItem('admin');
            this.$router.push({ name: 'HomePage' });
        }
    }
}
</script>

<style scoped>
</style>
