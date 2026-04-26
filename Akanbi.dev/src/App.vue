<template>
  <div id="app">
    <!-- Progress Bar -->
    <div class="progress-bar" id="progressBar"></div>

    <!-- Toast Notification -->
    <div class="toast-notification" id="toastNotification" role="status" aria-live="polite">Copied!</div>

    <!-- Skip Link -->
    <a class="skip-link" href="#mainContent">Skip to content</a>

    <!-- Navbar -->
    <Navbar />

    <!-- Main Content -->
    <main id="mainContent">
      <router-view />
    </main>

    <!-- Footer -->
    <Footer />

    <!-- WhatsApp Float -->
    <WhatsAppFloat />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import WhatsAppFloat from '@/components/WhatsAppFloat.vue'

const route = useRoute()

// Show CTA section on all pages except home
const showCTA = computed(() => route.name !== 'home')

onMounted(() => {
  // Progress bar functionality
  const progressBar = document.getElementById('progressBar')
  
  const updateProgressBar = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrollProgress = (scrollTop / scrollHeight) * 100
    progressBar.style.width = scrollProgress + '%'
  }

  window.addEventListener('scroll', updateProgressBar)
  updateProgressBar()
})
</script>

<style>

</style>