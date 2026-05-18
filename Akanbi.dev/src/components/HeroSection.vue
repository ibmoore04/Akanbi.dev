<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">

        <div class="hero-text">
          <h1>
            <span class="typing-name">
              <span class="highlight" ref="typingHighlight"></span>
              <span ref="typingSuffix"></span>
            </span>
          </h1>

          <h2>
            <span class="typing-subtitle" ref="typingSubtitle"></span>
          </h2>

          <p class="hero-description">
            I design and build <span class="highlight">pixel-perfect</span>, high-performance web experiences that
            feel polished, load fast, and move businesses forward.
          </p>

          <div class="hero-buttons">
            <button @click="navigateTo('projects')" class="btn btn-primary">
              <i class="fas fa-briefcase"></i> View Projects
            </button>

            <a href="/akanbi-ibrahim-cv.pdf" class="btn btn-secondary" download>
              <i class="fas fa-download"></i> Download CV
            </a>

            <button @click="navigateTo('contact')" class="btn btn-secondary">
              <i class="fas fa-envelope"></i> Contact Me
            </button>
          </div>
        </div>

        <div class="hero-image">
          <img src="/real-ibrahim.jpg" alt="Developer Profile" class="profile-img" />
        </div>

      </div>
    </div>
  </section>

  <div class="container">
    <div class="extra-card">
      <h3>What I Bring</h3>
      <div class="stats-row">
        <div class="stat-card">
          <div class="stat-number">3+</div>
          <div>Years Building for the Web</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">UX</div>
          <div>Interface-First Thinking</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">JS</div>
          <div>Modern JavaScript Focus</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">SEO</div>
          <div>Performance-Aware Delivery</div>
        </div>
      </div>
    </div>

    <div class="extra-card">
      <h3>How I Work</h3>
      <div class="testimonial-grid">
        <div class="testi-item">
          <i class="fas fa-quote-left"></i>
          <p>"I care about clean execution, sharp details, and communication that keeps projects moving."</p>
          <strong>Clear communication</strong>
        </div>

        <div class="testi-item">
          <i class="fas fa-quote-left"></i>
          <p>"I aim to make interfaces feel polished, intuitive, and trustworthy from the very first interaction."</p>
          <strong>Detail-first design</strong>
        </div>

        <div class="testi-item">
          <i class="fas fa-quote-left"></i>
          <p>"I build with responsiveness, speed, and maintainability in mind so the experience holds up in production."</p>
          <strong>Production-minded delivery</strong>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// safer navigation (prevents broken routes)
const validRoutes = ['projects', 'contact']

const navigateTo = (page) => {
  if (validRoutes.includes(page)) {
    router.push({ name: page })
  }
}

// refs (Vue-safe instead of getElementById)
const typingHighlight = ref(null)
const typingSubtitle = ref(null)

// typing data
const nameText = "Building Digital Experiences"
const titles = [
  "Frontend Developer",
  "React & Vue Expert",
  "Performance Optimizer"
]

let timeoutIds = []
let nameIndex = 0
let titleIndex = 0
let isAlive = true

const safeTimeout = (fn, delay) => {
  const id = setTimeout(() => {
    if (isAlive) fn()
  }, delay)
  timeoutIds.push(id)
}

// typing name
const typeName = () => {
  if (!isAlive) return

  if (nameIndex < nameText.length) {
    typingHighlight.value.textContent = nameText.substring(0, nameIndex + 1)
    nameIndex++
    safeTimeout(typeName, 100)
  } else {
    safeTimeout(typeTitle, 800)
  }
}

// typing subtitle loop
const typeTitle = () => {
  if (!isAlive) return

  const current = titles[titleIndex]
  let charIndex = 0

  const typeChars = () => {
    if (!isAlive) return

    if (charIndex < current.length) {
      typingSubtitle.value.textContent = current.substring(0, charIndex + 1)
      charIndex++
      safeTimeout(typeChars, 80)
    } else {
      safeTimeout(() => {
        typingSubtitle.value.textContent = ''
        titleIndex = (titleIndex + 1) % titles.length
        safeTimeout(typeTitle, 500)
      }, 2500)
    }
  }

  typeChars()
}

onMounted(() => {
  typeName()
})

onUnmounted(() => {
  isAlive = false
  timeoutIds.forEach(clearTimeout)
})
</script>

<style scoped>
/* keeping your design intact — no changes needed */
</style>