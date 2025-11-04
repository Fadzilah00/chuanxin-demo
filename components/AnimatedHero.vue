<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
    <!-- Animated Background Particles -->
    <div class="absolute inset-0">
      <div 
        v-for="(particle, index) in particles" 
        :key="index"
        class="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20 animate-pulse"
        :style="{
          left: particle.x + '%',
          top: particle.y + '%',
          animationDelay: particle.delay + 's',
          animationDuration: particle.duration + 's'
        }"
      ></div>
    </div>
    
    <!-- Animated Gradient Waves -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-float"></div>
      <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-400 to-pink-500 rounded-full opacity-20 animate-float" style="animation-delay: 2s;"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-10 animate-pulse" style="animation-delay: 4s;"></div>
    </div>
    
    <!-- Floating Chat Bubbles -->
    <div class="absolute inset-0">
      <div class="absolute top-20 left-10 w-16 h-16 bg-white/20 rounded-full animate-float" style="animation-delay: 1s;"></div>
      <div class="absolute top-40 right-20 w-12 h-12 bg-blue-400/30 rounded-full animate-float" style="animation-delay: 3s;"></div>
      <div class="absolute bottom-32 left-20 w-20 h-20 bg-purple-400/20 rounded-full animate-float" style="animation-delay: 2s;"></div>
      <div class="absolute bottom-20 right-10 w-14 h-14 bg-green-400/25 rounded-full animate-float" style="animation-delay: 4s;"></div>
    </div>
    
    <!-- 3D Globe Container -->
    <div class="absolute right-10 top-1/2 transform -translate-y-1/2 hidden lg:block">
      <div ref="globeContainer" class="w-64 h-64"></div>
    </div>
    
    <!-- Main Content -->
    <div class="container-custom relative z-10">
      <div class="text-center max-w-4xl mx-auto">
        <!-- Large Logo with Animation -->
        <h1 class="text-6xl md:text-8xl font-bold text-blue-600 dark:text-blue-400 mb-6 animate-fade-in-up">
          <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Chuanxin
          </span>
        </h1>
        
        <!-- Tagline with Typewriter Effect -->
        <p class="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-up" style="animation-delay: 0.5s;">
          {{ typewriterText }}
          <span class="animate-pulse">|</span>
        </p>
        
        <!-- CTA Buttons with Glow Effect -->
        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style="animation-delay: 1s;">
          <Button 
            @click="openApp" 
            variant="primary" 
            size="lg" 
            class="relative group overflow-hidden animate-pulse-glow"
          >
            <span class="relative z-10 flex items-center space-x-2">
              <span>{{ t('hero.cta') }}</span>
              <svg class="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </span>
            <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute inset-0 bg-white opacity-20 group-hover:animate-ping"></div>
            <!-- Glowing ring effect -->
            <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
          </Button>
          
        </div>
        
        <!-- Floating Feature Icons -->
        <div class="mt-16 flex justify-center space-x-8 animate-fade-in-up" style="animation-delay: 1.5s;">
          <div class="group cursor-pointer">
            <div class="bg-white dark:bg-gray-800 p-4 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
              <svg class="w-8 h-8 text-blue-600 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-400 mt-2 group-hover:text-blue-600 transition-colors">{{ t('hero.features.chat') }}</p>
          </div>
          
          <div class="group cursor-pointer">
            <div class="bg-white dark:bg-gray-800 p-4 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
              <svg class="w-8 h-8 text-green-600 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
              </svg>
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-400 mt-2 group-hover:text-green-600 transition-colors">{{ t('hero.features.translate') }}</p>
          </div>
          
          <div class="group cursor-pointer">
            <div class="bg-white dark:bg-gray-800 p-4 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
              <svg class="w-8 h-8 text-purple-600 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-400 mt-2 group-hover:text-purple-600 transition-colors">{{ t('hero.features.connect') }}</p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </div>
  </section>
</template>

<script setup>
import * as THREE from 'three'
import { useGlobalI18n } from '~/composables/useGlobalI18n'

const { t, locale } = useGlobalI18n()
const globeContainer = ref(null)
const typewriterText = ref('')
const particles = ref([])

// Initialize particles
onMounted(() => {
  // Create floating particles
  for (let i = 0; i < 50; i++) {
    particles.value.push({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4
    })
  }
  
  // Typewriter effect
  const fullText = t('hero.tagline')
  let index = 0
  const typewriter = setInterval(() => {
    if (index < fullText.length) {
      typewriterText.value += fullText[index]
      index++
    } else {
      clearInterval(typewriter)
    }
  }, 50)
  
  // Initialize 3D globe
  initGlobe()
})

const initGlobe = () => {
  if (!globeContainer.value) return
  
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  
  renderer.setSize(256, 256)
  globeContainer.value.appendChild(renderer.domElement)
  
  // Create globe
  const geometry = new THREE.SphereGeometry(1, 32, 32)
  const material = new THREE.MeshPhongMaterial({
    color: 0x2563eb,
    transparent: true,
    opacity: 0.8
  })
  const globe = new THREE.Mesh(geometry, material)
  scene.add(globe)
  
  // Add wireframe
  const wireframe = new THREE.WireframeGeometry(geometry)
  const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.3 })
  const wireframeMesh = new THREE.LineSegments(wireframe, lineMaterial)
  scene.add(wireframeMesh)
  
  // Add lighting
  const light = new THREE.DirectionalLight(0xffffff, 1)
  light.position.set(5, 5, 5)
  scene.add(light)
  
  camera.position.z = 3
  
  // Animation loop
  const animate = () => {
    requestAnimationFrame(animate)
    globe.rotation.y += 0.005
    wireframeMesh.rotation.y += 0.005
    renderer.render(scene, camera)
  }
  animate()
}

const openApp = () => {
  // Navigate to the QQLink app
  window.open('https://qqlink.com/en', '_blank')
}

const scrollToFeatures = () => {
  const featuresSection = document.querySelector('#features')
  if (featuresSection) {
    featuresSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
  opacity: 0;
}
</style>
