<template>
    <div>
        <h1>Admin Page</h1>
        <quill-editor v-model="editorHtml"></quill-editor>
        <p>Admin page goes here.</p>
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
    }
}
</script>

<style scoped>
</style>
