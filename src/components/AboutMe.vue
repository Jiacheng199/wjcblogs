<template>
    <div class="about-container">
        <div class="profile-img">
            <img src="https://avatars.githubusercontent.com/u/20380701?v=4" alt="profile-image">
        </div>
        <div class="description">
            <div class="background">
                <h2>Background</h2>
                    <p>University of South Australia (UniSA), [2017-2021]</p>
                    <p>Bachelor of Computer Programming(Honors)</p>
                    <br>
                    
                    <p>University of Melbourne (UniMelb), [2022-2023]</p>
                    <p>Master of Information Technology</p>
                    <p>Specialization in Artificial Intelligence</p>
            </div>

            <div class="expertise">
                <h2>Expertise</h2>
                <ul>
                    <li>Front-end: Vue.js, React</li>
                    <li>Backend: Node.js and Express.js</li>
                    <li>Database: MySQL && MangoDB</li>
                    <li>Cloud (AWS): S3, EC2, Lambda, RDS etc.</li>
                    <li>Others: Git/GitHub, Docker, Trello, Confluence.</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AboutMe',
    }
</script>

<style scoped>
    .about-container {
        display: flex;
        width: 100%;
        height: 100vh;
    }

    .profile-img {
        flex: 1;  /* Takes up 1/3 of the container */
        align-items: center;
        justify-content: center;
        height: 100%; /* Make sure the height is defined */
    }

    .description {
        display: flex;
        flex: 2;  /* Takes up 2/3 of the container */
        width: 80%;
        font: 400;
        font-weight: 600;
        font-size: x-large;
        line-height: 1.5;
        text-align: center;
        margin-top: 5%;
    }

    .description h2 {
        font-size: 2rem;
        font-weight: 600;
        margin-bottom: 5%;
    }

    .description ul {
        margin-left: 10%;
        margin-top: 5%;
        padding: 0;
        text-align: left;
    }

    .description li {
        margin-top: 5%;
    }

    .background {
        flex: 1;
    }

    .expertise {
        flex: 1;
    }


    .profile-img img {
        width: 60%;
        height: auto;
        margin-top: 12%;
        object-fit: cover;
        border-radius: 50%;
    }
</style>
