<template>
    <div class="callback-container">
        <h1>Processing login...</h1>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'AuthCallback',
    async created() {
        const params = new URLSearchParams(window.location.search);
        const code = params.get('code');
        if (code) {
            try {
                //call token exchange api to get the jwt token by providing code return from Conginto
                const tokenResponse = await axios.post('https://64jr50gz41.execute-api.ap-southeast-2.amazonaws.com/admin/exchange_token', {
                    code: code,
                    redirectUri: 'http://localhost:8080/callback'
                });

                console.log('success got token from Conginto');

                // Store tokens in sessionStorage or localStorage
                sessionStorage.setItem('access_token', tokenResponse.data.access_token);
                sessionStorage.setItem('id_token', tokenResponse.data.id_token);

                //set axios Authorization header for futher admin level operations
                axios.defaults.headers.common['Authorization'] = `Bearer ${tokenResponse.data.access_token}`;

                // Redirect to the admin page
                this.$router.push({ name: 'AdminPage' });
            } catch (error) {
                console.error('Error exchanging code for token:', error);
            }
        } else {
            console.error('No authorization code found.');
        }
    }
}
</script>
