<template>
    <div class="admin-container">
        <h1>Input your admin password</h1>
        <input type="password" v-model="password" />
        <button @click="login">Login</button>
        <p v-if="errorMsg" class="error-message">{{ errorMsg }}</p>
    </div>
</template>

<script>
import axios from 'axios';
const backendUrl = process.env.VUE_APP_BACKEND_URL;

export default {
    name: 'AdminLogin',
    data() {
        return{
            password:'',
            errorMsg:''
        }
    },
    methods:{
        async login(){
            try {
                //try local backend first
                const response = await axios.post(`${backendUrl}/adminlogin`, { password: this.password });
                console.log(response.data);
                if (response.data.success) {
                    sessionStorage.setItem('admin', true);
                    this.$router.push({ name: 'AdminPage' });
                } else {
                    //alert the user that the password is incorrect
                    this.errorMsg = 'Incorrect password. Please try again.';
                }
            } catch (error) {
                this.errorMsg = 'An error occurred. Please try again later.';
            }
        }
    }
}
</script>

<style scoped>
.admin-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 5%;
}

.admin-container h1 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 5%;
}

.admin-container input {
    width: 50%;
    height: 50px;
    font-size: 1.5rem;
    padding: 0 10px;
    margin-bottom: 5%;
}

.admin-container button {
    width: 50%;
    height: 50px;
    font-size: 1.5rem;
    font-weight: 600;
    background-color: #28887b;
    color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;
}

.error-message {
    color: red;
    margin-top: 20px;
}
    
</style>