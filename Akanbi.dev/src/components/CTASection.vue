<template>
  <section class="cta-section">
    <div class="container">
      <div class="cta-content">
        <h2 class="cta-title">Let's Work Together</h2>
        <p class="cta-description">
          If you need a developer who cares about performance, product quality, and the small details users notice,
          let's build something that feels sharp from the first click.
        </p>
        <div class="cta-buttons">
          <a href="#" @click="navigateTo('contact')" class="btn btn-primary cta-btn">
            <i class="fas fa-envelope"></i> Get In Touch
          </a>
          <a 
            href="https://wa.me/2347053357203?text=Hello%20Akanbi%2C%20I%27m%20interested%20in%20working%20with%20you!"
            target="_blank" 
            rel="noopener noreferrer" 
            class="btn btn-secondary cta-btn"
          >
            <i class="fab fa-whatsapp"></i> Chat on WhatsApp
          </a>
        </div>
        <div class="cta-stats">
          <div class="cta-stat" v-for="stat in stats" :key="stat.number">
            <span class="stat-number">{{ stat.number }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const stats = ref([
  { number: '24h', label: 'Response Time' },
  { number: '100%', label: 'Client Satisfaction' },
  { number: 'Free', label: 'Initial Consultation' }
])

const navigateTo = (page) => {
  router.push(`/${page}`)
}
</script>

<style scoped>
/* All CTA styles will be imported from the main CSS file */
</style>
