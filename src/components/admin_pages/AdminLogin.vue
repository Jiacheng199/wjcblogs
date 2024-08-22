<template>
    <div class="admin-container">
        <h1>Admin Login</h1>
        <h2>{{ callbackUrl }}</h2>
        <button @click="redirectToCognito">Login with Cognito</button>
    </div>
</template>

<script>
export default {
    name: 'AdminLogin',
    data(){
        const prodRedirectUri = 'http://localhost:8080/adminpage';
        const encodedRedirectUri = encodeURIComponent(prodRedirectUri);
        return {
            callbackUrl: encodedRedirectUri
        };
    },
    methods: {
        redirectToCognito() {
            
            const devRedirectUri = 'http://localhost:8080/callback';
            const encodedRedirectUri = encodeURIComponent(devRedirectUri);
            const url = `https://auth.wjcblogs.com/oauth2/authorize?client_id=5p7d09j06sshpk7f3ge418kk1n&response_type=code&scope=email+openid+phone&redirect_uri=${encodedRedirectUri}`;
            //const url = 'https://auth.wjcblogs.com/oauth2/authorize?client_id=5p7d09j06sshpk7f3ge418kk1n&response_type=code&scope=email+openid+phone&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fadminpage';
            
            // Redirect user to Cognito Hosted UI
            window.location.href = url;
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
