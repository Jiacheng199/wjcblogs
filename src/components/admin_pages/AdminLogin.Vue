<template>
    <div class="admin-container">
        <h1>Input your admin password</h1>
        <input type="password" v-model="password" />
        <button @click="login">Login</button>
    </div>
</template>

<script>
export default {
    name: 'AdminLogin',
}//test
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
    
</style>