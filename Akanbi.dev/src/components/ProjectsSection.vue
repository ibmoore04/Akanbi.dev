<template>
  <div class="container">
    <h2 class="section-title">My Projects</h2>
    <div class="projects-toolbar" aria-label="Project filters">
      <button 
        v-for="filter in filters" 
        :key="filter.value"
        class="filter-chip" 
        :class="{ active: activeFilter === filter.value }"
        type="button" 
        @click="setActiveFilter(filter.value)"
        :aria-pressed="activeFilter === filter.value"
      >
        {{ filter.label }}
      </button>
    </div>
    <div class="projects-grid">
      <article 
        v-for="project in filteredProjects" 
        :key="project.id"
        class="project-card" 
        :data-category="project.category"
        tabindex="0"
      >
        <div class="project-badges">
          <span 
            v-for="badge in project.badges" 
            :key="badge.text"
            class="project-badge" 
            :class="{ 'muted-badge': badge.muted }"
          >
            {{ badge.text }}
          </span>
        </div>
        <img 
          :src="project.image" 
          class="project-img" 
          :alt="project.alt" 
          loading="lazy"
          decoding="async" 
        />
        <div class="project-info">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <ul class="project-highlights">
            <li v-for="highlight in project.highlights" :key="highlight">
              {{ highlight }}
            </li>
          </ul>
          <div class="project-tech">
            <span 
              v-for="tech in project.technologies" 
              :key="tech"
              class="tech-tag"
            >
              {{ tech }}
            </span>
          </div>
          <div class="project-meta">
            <span><strong>Role:</strong> {{ project.role }}</span>
            <span><strong>Focus:</strong> {{ project.focus }}</span>
          </div>
          <div class="project-actions">
            <a 
              :href="project.liveUrl" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="project-btn primary"
            >
              <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
            <a 
              :href="project.githubUrl" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="project-btn secondary"
            >
              <i class="fab fa-github"></i> GitHub Code
            </a>
          </div>
        </div>
      </article>
    </div>
    <div class="extra-card">
      <h3>Open Source Contributions</h3>
      <div class="services-grid compact-services-grid">
        <div class="service-item" v-for="contribution in contributions" :key="contribution.title">
          <i :class="contribution.icon"></i>
          <h4>{{ contribution.title }}</h4>
          <p>{{ contribution.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeFilter = ref('all')

const filters = ref([
  { value: 'all', label: 'All Work' },
  { value: 'ecommerce', label: 'E-commerce' },
  { value: 'hospitality', label: 'Hospitality' },
  { value: 'automotive', label: 'Automotive' }
])

const projects = ref([
  {
    id: 1,
    category: 'ecommerce',
    title: 'AnimateCart Website',
    description: 'A modern storefront experience designed around discovery, trust signals, and a smoother path to checkout.',
    image: import.meta.env.BASE_URL + 'animate-cart.png',
    alt: 'AnimateCart e-commerce project preview',
    badges: [
      { text: 'Featured', muted: false },
      { text: 'Checkout Flow', muted: true }
    ],
    highlights: [
      'Responsive product browsing and stronger purchase flow structure.',
      'UI tuned for clarity across catalog, account, and checkout moments.'
    ],
    technologies: ['JavaScript', 'CSS Grid', 'Bootstrap', 'Payment API'],
    role: 'UI development',
    focus: 'Conversion-oriented commerce UX',
    liveUrl: 'https://ibmoore04.github.io/AnimateCart/',
    githubUrl: 'https://github.com/ibmoore04/AnimateCart'
  },
  {
    id: 2,
    category: 'hospitality',
    title: 'Luxurious Restaurant App',
    description: 'An immersive hospitality experience with presentation-first storytelling, elegant pacing, and premium visual rhythm.',
    image: import.meta.env.BASE_URL + 'delici-screenshot.png',
    alt: 'Restaurant website project preview',
    badges: [
      { text: 'Case Study', muted: false },
      { text: 'Motion-Led', muted: true }
    ],
    highlights: [
      'Designed to make menus, atmosphere, and brand tone feel elevated.',
      'Balances rich visuals with responsive browsing and scannable sections.'
    ],
    technologies: ['JavaScript', 'CSS Grid', 'Bootstrap'],
    role: 'Frontend design and build',
    focus: 'Brand storytelling and flow',
    liveUrl: 'https://ibmoore04.github.io/DELICI-RESTAURANT/',
    githubUrl: 'https://github.com/ibmoore04/DELICI-RESTAURANT'
  },
  {
    id: 3,
    category: 'automotive',
    title: 'Veloz Cars App',
    description: 'A premium automotive interface built to make inventory exploration feel fast, aspirational, and easy to compare.',
    image: import.meta.env.BASE_URL + 'veloz-port.png',
    alt: 'Veloz Cars project preview',
    badges: [
      { text: 'Showcase', muted: false },
      { text: 'Filter UX', muted: true }
    ],
    highlights: [
      'Supports discovery with cleaner inventory presentation and browsing cues.',
      'Combines polished visuals with filter-friendly product exploration.'
    ],
    technologies: ['JavaScript', 'CSS Grid', 'Bootstrap', 'API Integration'],
    role: 'Frontend implementation',
    focus: 'Discovery and visual polish',
    liveUrl: 'https://ibmoore04.github.io/Veloz-cars/',
    githubUrl: 'https://github.com/ibmoore04/Veloz-cars'
  }
])

const contributions = ref([
  {
    icon: 'fab fa-github-alt',
    title: 'React UI Library',
    description: 'Accessible interface components adopted by 200+ developers.'
  },
  {
    icon: 'fas fa-code-branch',
    title: 'Node.js Auth Middleware',
    description: 'JWT authentication middleware with 150+ stars and practical production use.'
  }
])

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') {
    return projects.value
  }
  return projects.value.filter(project => project.category === activeFilter.value)
})

const setActiveFilter = (filterValue) => {
  activeFilter.value = filterValue
}
</script>

<style scoped>
/* All projects styles will be imported from the main CSS file */
</style>
