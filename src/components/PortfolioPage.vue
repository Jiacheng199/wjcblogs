<template>
    <div class="portfolio-container">
        <div class="projects">
            <div v-for="project in projects" :key="project.id" class="project-card">
                <img :src="project.imageURL" :alt="project.title" class="project-image">
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
                    description: 'This is a description for Project 1.',
                    imageURL: 'https://via.placeholder.com/300'  // Placeholder image
                },
                {
                    id: 2,
                    title: 'TreeHole',
                    description: 'This is a description for Project 2.',
                    imageURL: 'https://via.placeholder.com/300'  // Placeholder image
                },
                {
                    id: 3,
                    title: 'PetMeNow',
                    description: 'This is a description for Project 3.',
                    imageURL: 'https://via.placeholder.com/300'  // Placeholder image
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
