<template>
  <div class="container">
    <h2 class="section-title">About Me</h2>
    <div class="about-wrapper">
      <div class="about-grid">
        <div class="about-text-block">
          <p>
            I'm a full-stack developer with <strong>3+ years</strong> of experience
            building modern web products with JavaScript, React, Node.js, and MongoDB.
          </p>
          <p>
            My work blends product thinking, clean engineering, and visual precision
            to create experiences that are scalable, intuitive, and conversion-minded.
          </p>
          <p>
            I care about the details users feel immediately: performance,
            clarity, responsiveness, and interfaces that earn trust fast.
          </p>
        </div>
        <div class="skills-block">
          <h3>My Skills</h3>
          <div class="skill-item" v-for="skill in skills" :key="skill.name">
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
      <h3>Services I Provide</h3>
      <div class="services-grid">
        <div class="service-item" v-for="service in services" :key="service.title">
          <i :class="service.icon"></i>
          <h4>{{ service.title }}</h4>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </div>
    <div class="extra-card">
      <h3>Journey So Far</h3>
      <div class="stack-list">
        <div class="timeline-item" v-for="item in timeline" :key="item.title">
          <i :class="item.icon"></i><strong>{{ item.period }}:</strong>
          {{ item.description }}
        </div>
      </div>
    </div>
    <div class="resume-panel">
      <div class="resume-copy">
        <span class="section-kicker">Resume</span>
        <h3>Download a polished CV or preview it in the browser</h3>
        <p>
          I put together a clean, print-friendly CV that summarizes my stack, experience focus, and project work.
          It opens as a standalone page and can be downloaded directly.
        </p>
        <div class="resume-actions">
          <a href="./akanbi-ibrahim-cv.html" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
            <i class="fas fa-eye"></i> Preview CV
          </a>
          <a href="./akanbi-ibrahim-cv.html" class="btn btn-secondary" download>
            <i class="fas fa-download"></i> Download CV
          </a>
        </div>
      </div>
      <div class="resume-meta" aria-label="Resume highlights">
        <div class="resume-stat" v-for="stat in resumeStats" :key="stat.value">
          <span class="resume-stat-value">{{ stat.value }}</span>
          <span class="resume-stat-label">{{ stat.label }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const skills = ref([
  { name: 'HTML/CSS', level: 95 },
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'MongoDB', level: 75 }
])

const services = ref([
  {
    icon: 'fas fa-code',
    title: 'Web Development',
    description: 'Modern web applications built for speed, clarity, and long-term scalability.'
  },
  {
    icon: 'fas fa-mobile-alt',
    title: 'Responsive Design',
    description: 'Mobile-first interfaces that stay polished and readable across every breakpoint.'
  },
  {
    icon: 'fas fa-database',
    title: 'API Integration',
    description: 'Reliable integrations with REST APIs and essential third-party services.'
  },
  {
    icon: 'fas fa-chart-line',
    title: 'Performance Optimization',
    description: 'Sharper loading speed, better SEO, and smoother user journeys.'
  }
])

const timeline = ref([
  {
    icon: 'fas fa-briefcase timeline-icon',
    period: '2023 - Present',
    description: 'Freelance and portfolio-focused development across landing pages, business websites, and product interfaces.'
  },
  {
    icon: 'fas fa-briefcase timeline-icon',
    period: '2021 - 2023',
    description: 'Built frontend projects across e-commerce, hospitality, and automotive concepts while sharpening UI craft.'
  },
  {
    icon: 'fas fa-graduation-cap timeline-icon',
    period: 'Ongoing',
    description: 'Continuous learning in JavaScript architecture, accessibility, performance, and modern interface systems.'
  }
])

const resumeStats = ref([
  {
    value: '3+',
    label: 'Years of web development focus'
  },
  {
    value: 'JS',
    label: 'Frontend-first with full-stack support'
  },
  {
    value: 'UX',
    label: 'Polished interfaces built for trust and speed'
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
/* All about styles will be imported from the main CSS file */
</style>
