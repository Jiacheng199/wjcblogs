<template>
    <div class="portfolio-container">
        <div class="projects">
            <div v-for="project in projects" :key="project.id" class="project-card">
                <a :href="project.projectURL" target="_blank" rel="noopener noreferrer"> 
                    <img :src="project.imageURL" :alt="project.title" class="project-image">
                </a>
                <h3>{{ project.title }}</h3>
                <p>{{ project.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PortfolioPage',
    data() {
        return {
            projects: [
                {
                    id: 1,
                    title: 'Find your study mate',
                    description: 'Why study alone when you can study with your mate?',
                    imageURL: 'portfolio/studymate.png',  // Placeholder image
                    projectURL: 'https://github.com/Jiacheng199/StudyMate'
                },
                {
                    id: 2,
                    title: 'TreeHole',
                    description: 'No registration, anonymous, tell or write your secrets',
                    imageURL: 'portfolio/treehole.png',  // Placeholder image
                    projectURL: 'https://github.com/Jiacheng199/TreeHole'
                },
                {
                    id: 3,
                    title: 'PetMeNow',
                    description: 'When you are on a business trip or unable to take care of your pet, let PetMeNow help you find a trustworthy temporary owner.',
                    imageURL: 'portfolio/petmenow.png',  // Placeholder image
                    projectURL: 'https://github.com/COMP90018-2022-SM2-Group-T01-07-1'
                },
                {
                    id: 4,
                    title: 'Exchange Everything',
                    description:'Exchange Everything is a platform for people to exchange their unwanted items with others.',
                    imageURL: 'portfolio/exchangeeverything.png',  // Placeholder image
                    projectURL: 'https://github.com/Jiacheng199/Exchange'
                }
            ]
        }
    }
}
</script>

<style scoped>
    .portfolio-container {
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
    }

    .projects {
        margin-top: 10%;
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
        justify-content: center;
    }

    .project-card {
        width: 300px;
        border: 1px solid #eaeaea;
        border-radius: 5px;
        overflow: hidden;
        transition: transform 0.3s;
    }

    .project-card:hover {
        transform: scale(1.05);
    }

    .project-image {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }

    h3 {
        margin-top: 0.5rem;
    }

    p {
        padding: 0 1rem 1rem;
    }
</style>
