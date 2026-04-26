<template>
  <div class="container">
    <h2 class="section-title">Contact Me</h2>
    <div class="contact-content">
      <div class="contact-info">
        <h3>Get In Touch</h3>
        <p>
          I'm open to freelance work, collaborations, and thoughtful full-time opportunities.
          If you have a project in mind, I'd love to hear what you're building.
        </p>
        <div class="contact-item">
          <div class="contact-icon">
            <i class="fas fa-map-marker-alt"></i>
          </div>
          <div>
            <h4>Location</h4>
            <p>Ijebu-Ode, Ogun State, Nigeria</p>
          </div>
        </div>
        <div class="contact-item">
          <div class="contact-icon"><i class="fas fa-envelope"></i></div>
          <div>
            <h4>Email</h4>
            <p id="emailText">akanbiibrahimolatunde27@gmail.com</p>
          </div>
          <button class="copy-btn" @click="copyEmail" type="button">
            <i class="fas fa-copy"></i> Copy Email
          </button>
        </div>
        <div class="contact-item">
          <div class="contact-icon"><i class="fas fa-phone"></i></div>
          <div>
            <h4>Phone</h4>
            <p id="phoneText">+2347053357203</p>
          </div>
          <button class="copy-btn" @click="copyPhone" type="button">
            <i class="fas fa-copy"></i> Copy Phone
          </button>
        </div>
      </div>
      <div class="contact-form">
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">Full Name</label>
            <input 
              type="text" 
              id="name" 
              class="form-control"
              placeholder="Your Name" 
              required 
              v-model="form.name"
            />
          </div>
          <div class="form-group">
            <label for="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              class="form-control"
              placeholder="Your Email" 
              required 
              v-model="form.email"
            />
          </div>
          <div class="form-group">
            <label for="subject">Subject</label>
            <input 
              type="text" 
              id="subject" 
              class="form-control"
              placeholder="Subject" 
              required 
              v-model="form.subject"
            />
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea 
              id="message" 
              class="form-control" 
              placeholder="Your Message"
              rows="4" 
              required
              v-model="form.message"
            ></textarea>
          </div>
          <button type="submit" class="btn" :disabled="isSubmitting">
            {{ isSubmitting ? 'Sending...' : 'Send Message' }}
          </button>
        </form>
      </div>
    </div>
    <div class="extra-card">
      <h3>Quick Answers</h3>
      <div class="stack-list">
        <div v-for="qa in quickAnswers" :key="qa.question">
          <strong><i :class="qa.icon"></i> {{ qa.question }}</strong>
          <span class="muted-note">{{ qa.answer }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)

const quickAnswers = ref([
  {
    icon: 'fas fa-clock',
    question: 'Response time?',
    answer: 'Usually within 24 hours on weekdays.'
  },
  {
    icon: 'fas fa-laptop-code',
    question: 'Availability for freelance?',
    answer: 'Yes, I accept select freelance projects. Let\'s discuss scope.'
  },
  {
    icon: 'fas fa-handshake',
    question: 'Collaboration opportunities?',
    answer: 'Always excited to partner on open-source or innovative startups.'
  }
])

const copyEmail = () => {
  const emailText = document.getElementById('emailText').textContent
  navigator.clipboard.writeText(emailText)
  showToast('Email copied to clipboard!')
}

const copyPhone = () => {
  const phoneText = document.getElementById('phoneText').textContent
  navigator.clipboard.writeText(phoneText)
  showToast('Phone number copied to clipboard!')
}

const showToast = (message) => {
  // Create toast notification
  const toast = document.createElement('div')
  toast.className = 'toast-notification show'
  toast.textContent = message
  toast.setAttribute('role', 'status')
  toast.setAttribute('aria-live', 'polite')
  
  document.body.appendChild(toast)
  
  setTimeout(() => {
    toast.classList.remove('show')
    setTimeout(() => {
      document.body.removeChild(toast)
    }, 300)
  }, 2000)
}

const handleSubmit = async () => {
  isSubmitting.value = true
  
  try {
    // Here you would typically send the form data to your backend
    // For now, we'll just show a success message
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
    
    showToast('Message sent successfully!')
    
    // Reset form
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  } catch (error) {
    showToast('Failed to send message. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
/* All contact styles will be imported from the main CSS file */
</style>
