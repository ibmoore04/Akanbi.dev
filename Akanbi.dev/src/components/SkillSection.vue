<template>
  <div class="container">
    <h2 class="section-title">Technical Skills & Expertise</h2>
    <div class="about-wrapper">
      <div class="about-grid">
        <div class="about-text-block">
          <h3 class="gradient-subtitle">
            Core Competencies
          </h3>
          <p>
            I bring a practical full-stack skill set with particular strength in
            modern JavaScript development, interface systems, and responsive implementation.
          </p>
          <p>
            My strongest work lives at the intersection of frontend polish and
            backend reliability, where performance and usability have to work together.
          </p>
          <p>
            I keep refining my toolkit so I can ship current, maintainable solutions
            without losing sight of business goals or user experience.
          </p>
        </div>
        <div class="skills-block">
          <h3>Advanced Skills</h3>
          <div class="skill-item" v-for="skill in advancedSkills" :key="skill.name">
            <div class="skill-name">
              <span>{{ skill.name }}</span><span>{{ skill.level }}%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-level" :data-width="skill.level" :style="{ width: skill.level + '%' }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="extra-card">
      <h3>Tools & Technologies I Master</h3>
      <div class="services-grid">
        <div class="service-item" v-for="tool in tools" :key="tool.title">
          <i :class="tool.icon"></i>
          <h4>{{ tool.title }}</h4>
          <p>{{ tool.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const advancedSkills = ref([
  { name: 'TypeScript', level: 80 },
  { name: 'Next.js', level: 75 },
  { name: 'Tailwind CSS', level: 88 },
  { name: 'Python', level: 70 },
  { name: 'GraphQL', level: 65 }
])

const tools = ref([
  {
    icon: 'fab fa-react',
    title: 'React & Ecosystem',
    description: 'Hooks, Context API, Redux, React Router'
  },
  {
    icon: 'fab fa-node-js',
    title: 'Node.js',
    description: 'Express, REST APIs, JWT, Authentication'
  },
  {
    icon: 'fas fa-database',
    title: 'Databases',
    description: 'MongoDB, PostgreSQL, Firebase'
  },
  {
    icon: 'fab fa-git-alt',
    title: 'Version Control',
    description: 'Git, GitHub, GitLab, CI/CD basics'
  },
  {
    icon: 'fas fa-cloud',
    title: 'Cloud & Deployment',
    description: 'Vercel, Netlify, Heroku, AWS basics'
  },
  {
    icon: 'fas fa-palette',
    title: 'UI/UX Tools',
    description: 'Figma, Adobe XD, responsive wireframing'
  }
])

onMounted(() => {
  // Animate skill bars when they come into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const skillLevel = entry.target
        const width = skillLevel.getAttribute('data-width')
        skillLevel.style.width = width + '%'
      }
    })
  })

  document.querySelectorAll('.skill-level').forEach(skill => {
    observer.observe(skill)
  })
})
</script>

<style scoped>
/* All skills styles will be imported from the main CSS file */
</style>
