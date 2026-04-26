<template>
  <footer>
    <div class="container">
      <a href="#" class="logo footer-brand" @click="navigateTo('home')">Akanbi.dev</a>
      <div class="social-links">
        <a href="https://github.com/ibmoore04" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/akanbi-ibrahim-4ab3043a6" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a>
        <a href="https://www.facebook.com/profile.php?id=61574307518359" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="https://wa.me/2347053357203" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-whatsapp"></i></a>
      </div>
      <p class="copyright">
        &copy; 2026 Akanbi.dev. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateTo = (page) => {
  router.push(`/${page}`)
}
</script>

<style scoped>
/* All footer styles will be imported from the main CSS file */
</style>
