<template>
    <div class="about-container max-w-4xl mx-auto mt-24 p-8 bg-white rounded-lg shadow-lg">
      <div class="description space-y-12">
        <!-- Background Section -->
        <div class="background">
          <h2 class="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-teal-500 pl-3">Education</h2>
          <div class="space-y-4">
            <div class="flex justify-between items-center">
              <div>
                <h3 class="text-xl font-semibold text-gray-800">Master of Information Technology</h3>
                <p class="text-gray-600">Specialization: AI, NLP</p>
              </div>
              <div class="text-gray-700 text-right">
                University of Melbourne<br>
                (2022-2023)
              </div>
            </div>
            <div class="flex justify-between items-center">
              <div>
                <h3 class="text-xl font-semibold text-gray-800">Bachelor of Engineering</h3>
                <p class="text-gray-600">Specialization: Computer Software Engineering (Honors)</p>
              </div>
              <div class="text-gray-700 text-right">
                University of South Australia<br>
                (2017-2021)
              </div>
            </div>
          </div>
        </div>
  
        <!-- Expertise Section -->
        <div class="expertise">
          <h2 class="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-teal-500 pl-3">Technical Expertise</h2>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
            <li>
              <h4 class="font-semibold">Machine Learning</h4>
              <p>Python, PyTorch, Scikit-learn</p>
            </li>
            <li>
              <h4 class="font-semibold">Natural Language Processing (NLP)</h4>
              <p>Text Classification, Sentiment Analysis</p>
            </li>
            <li>
              <h4 class="font-semibold">Front-end Development</h4>
              <p>Vue.js, React, HTML, CSS, Tailwind CSS</p>
            </li>
            <li>
              <h4 class="font-semibold">Back-end Development</h4>
              <p>Node.js, Express.js, RESTful APIs</p>
            </li>
            <li>
              <h4 class="font-semibold">Databases</h4>
              <p>MySQL, MongoDB, DynamoDB</p>
            </li>
            <li>
              <h4 class="font-semibold">Cloud Computing</h4>
              <p>AWS (S3, EC2, Lambda, RDS, API Gateway, DDB)</p>
            </li>
            <li>
              <h4 class="font-semibold">DevOps & Tools</h4>
              <p>Docker, Git/GitHub, CI/CD</p>
            </li>
            <li>
              <h4 class="font-semibold">Project Management Tools</h4>
              <p>Agile Methodologies, Trello, Confluence</p>
            </li>
          </ul>
        </div>
  
        <!-- Certifications Section -->
        <div class="certifications">
          <h2 class="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-teal-500 pl-3">Certifications</h2>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li>Certified AWS Solutions Architect – Associate</li>
            <li>Certified AWS Developer - Associate</li>
            <li>Certified AWS  Cloud Practitioner</li>
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
  /* Tailwind CSS classes are applied directly in the template */
  </style>
  