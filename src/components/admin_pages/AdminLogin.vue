<template>
    <div class="admin-container">
        <h1>Admin Login</h1>
        <button @click="redirectToCognito">Login with Cognito</button>
    </div>
</template>

<script>
export default {
    name: 'AdminLogin',
    methods: {
        redirectToCognito() {
            //callback url
            const devRedirectUri = 'http://localhost:8080/adminpage';
                
            //encode to the format that OAuth will accept
            const encodedRedirectUri = encodeURIComponent(devRedirectUri);

            //AWS Cognito's admin login page for wjcblogs' admin user 
            const url = `https://auth.wjcblogs.com/oauth2/authorize?client_id=5p7d09j06sshpk7f3ge418kk1n&response_type=code&scope=email+openid+phone&redirect_uri=${encodedRedirectUri}`;
            
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
