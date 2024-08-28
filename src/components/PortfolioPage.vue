<template>
    <div class="portfolio-container max-w-5xl mx-auto mt-24 py-12 px-4 sm:px-6 lg:px-8">
        <div class="projects grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <a v-for="project in projects" :key="project.id" :href="project.projectURL" target="_blank"
                rel="noopener noreferrer"
                class="project-card bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                <img :src="project.imageURL" :alt="project.title" class="project-image w-full h-48 object-cover">
                <div class="p-6">
                    <h3 class="text-2xl font-semibold text-gray-800 mb-2">{{ project.title }}</h3>
                    <p class="text-gray-600">{{ project.description }}</p>
                </div>
            </a>
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
                    id: 5,
                    title: 'Fact-Checking Climate Statements',
                    description: 'A Natural Language Processing project focused on fact-checking statements related to climate change.',
                    imageURL: '/imgs/NLPFactChecking.png',
                    projectURL: 'https://github.com/Jiacheng199/FactChecker_NLP'
                }
                ,
                {
                    id: 6,
                    title: 'Yinsh AI Agent',
                    description: 'An AI agent developed for the abstract strategy board game Yinsh, utilizing a Q-learning algorithm to optimize gameplay through feature-based reinforcement learning.',
                    imageURL: '/imgs/YinshAI.jpg',
                    projectURL: 'https://github.com/Jiacheng199/Yinsh_Project/tree/main/yinsh-project'
                }
                ,
                {
                    id: 3,
                    title: 'PetMeNow',
                    description: 'When you are on a business trip or unable to take care of your pet, let PetMeNow help you find a trustworthy temporary owner.',
                    imageURL: '/imgs/PetMeNow.png',
                    projectURL: 'https://github.com/WangJiaCheng1999/PetMeNow-frontend-master'
                },
                {
                    id: 7,
                    title: 'Clinical Text Normalization and Mapping Platform',
                    description: 'A project focused on applying Natural Language Processing techniques to analyze and extract insights from digital health data.',
                    imageURL: '/imgs/DigitalHealthNLP.jpg',
                    projectURL: 'https://github.com/Jiacheng199/Digital_Health_NLP'
                },
                {
                    id: 8,
                    title: 'Machine Learning for Authorship Attribution',
                    description: 'A project focused on using statistical machine learning techniques to determine the authorship of academic papers by analyzing various textual features.',
                    imageURL: '/imgs/AuthorshipAttribution.png',
                    projectURL: 'https://github.com/Jiacheng199/SML_Project'
                }


            ]
        }
    }
}
</script>

<style scoped>
/* Tailwind CSS classes are applied directly in the template */
</style>