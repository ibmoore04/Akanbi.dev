<template>
  <header>
    <div class="container">
      <nav>
        <!-- LOGO -->
        <router-link to="/" class="logo">Akanbi.dev</router-link>

        <!-- DESKTOP NAV -->
        <ul class="nav-links" id="nav-links">
          <li>
            <router-link to="/" class="nav-link" active-class="active">Home</router-link>
          </li>
          <li>
            <router-link to="/about" class="nav-link" active-class="active">About</router-link>
          </li>
          <li>
            <router-link to="/skills" class="nav-link" active-class="active">Skills</router-link>
          </li>
          <li>
            <router-link to="/projects" class="nav-link" active-class="active">Projects</router-link>
          </li>
          <li>
            <router-link to="/contact" class="nav-link" active-class="active">Contact</router-link>
          </li>
        </ul>

        <!-- RIGHT CONTROLS -->
        <div class="right-controls">
          <button
            class="menu-toggle"
            id="menu-toggle"
            type="button"
            aria-label="Open navigation menu"
            aria-controls="offcanvasMenu"
            aria-expanded="false"
            @click="toggleMobileMenu"
          >
            <i class="fas fa-bars"></i>
          </button>

          <button
            class="theme-toggle"
            id="themeToggle"
            type="button"
            aria-label="Toggle dark or light mode"
            aria-pressed="false"
            @click="toggleTheme"
          >
            <i class="fas fa-moon" id="themeIcon"></i>
          </button>
        </div>
      </nav>
    </div>
  </header>

  <!-- OVERLAY -->
  <div
    class="offcanvas-overlay"
    id="offcanvasOverlay"
    :class="{ active: isMobileMenuOpen }"
    @click="closeMobileMenu"
  ></div>

  <!-- MOBILE MENU -->
  <div
    class="offcanvas-menu"
    id="offcanvasMenu"
    :class="{ active: isMobileMenuOpen }"
  >
    <div class="offcanvas-header">
      <router-link to="/" class="logo" @click="closeMobileMenu">
        Akanbi.dev
      </router-link>

      <button
        class="offcanvas-close"
        id="offcanvasClose"
        type="button"
        aria-label="Close navigation menu"
        @click="closeMobileMenu"
      >
        <i class="fas fa-times"></i>
      </button>
    </div>

    <div class="offcanvas-nav">
      <router-link to="/" class="offcanvas-nav-link" active-class="active" @click="closeMobileMenu">Home</router-link>
      <router-link to="/about" class="offcanvas-nav-link" active-class="active" @click="closeMobileMenu">About</router-link>
      <router-link to="/skills" class="offcanvas-nav-link" active-class="active" @click="closeMobileMenu">Skills</router-link>
      <router-link to="/projects" class="offcanvas-nav-link" active-class="active" @click="closeMobileMenu">Projects</router-link>
      <router-link to="/contact" class="offcanvas-nav-link" active-class="active" @click="closeMobileMenu">Contact</router-link>
    </div>

    <div class="offcanvas-footer">
      <div class="social-links">
        <a href="https://github.com/ibmoore04" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/akanbi-ibrahim-4ab3043a6" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="https://www.facebook.com/profile.php?id=61565920483171" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-facebook-f"></i>
        </a>
        <a href="https://wa.me/2347053357203" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-whatsapp"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isMobileMenuOpen = ref(false)

// MOBILE MENU
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : ''
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}

// THEME TOGGLE
const toggleTheme = () => {
  const body = document.body
  const themeIcon = document.getElementById('themeIcon')
  const themeToggle = document.getElementById('themeToggle')

  if (body.classList.contains('light-theme')) {
    body.classList.remove('light-theme')
    themeIcon.classList.remove('fa-sun')
    themeIcon.classList.add('fa-moon')
    themeToggle.setAttribute('aria-pressed', 'false')
    localStorage.setItem('theme', 'dark')
  } else {
    body.classList.add('light-theme')
    themeIcon.classList.remove('fa-moon')
    themeIcon.classList.add('fa-sun')
    themeToggle.setAttribute('aria-pressed', 'true')
    localStorage.setItem('theme', 'light')
  }
}

// INIT
onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const themeIcon = document.getElementById('themeIcon')
  const themeToggle = document.getElementById('themeToggle')

  if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
    document.body.classList.add('light-theme')
    themeIcon.classList.remove('fa-moon')
    themeIcon.classList.add('fa-sun')
    themeToggle.setAttribute('aria-pressed', 'true')
  }
})
</script>

<style scoped>
/* unchanged */
</style>