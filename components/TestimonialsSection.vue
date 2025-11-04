<template>
  <section class="section-padding bg-gray-50 dark:bg-gray-800">
    <div class="container-custom">
      <!-- Testimonials -->
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in-up">
          {{ t('testimonials.title') }}
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in-up" style="animation-delay: 0.2s;">
          {{ t('testimonials.subtitle') }}
        </p>
      </div>
      
      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div 
          v-for="(testimonial, index) in testimonials" 
          :key="index"
          class="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
              {{ testimonial.name.charAt(0) }}
            </div>
            <div class="ml-4">
              <h4 class="font-semibold text-gray-900 dark:text-white">{{ testimonial.name }}</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">{{ testimonial.role }}</p>
            </div>
          </div>
          
          <div class="flex items-center mb-3">
            <div class="flex space-x-1">
              <svg v-for="star in 5" :key="star" class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
          </div>
          
          <p class="text-gray-600 dark:text-gray-300 italic">"{{ testimonial.content }}"</p>
        </div>
      </div>
      
      <!-- Partners Section -->
      <div class="text-center">
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 animate-fade-in-up">
          {{ t('testimonials.partners.title') }}
        </h3>
        
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          <div 
            v-for="(partner, index) in partners" 
            :key="index"
            class="flex items-center justify-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="text-2xl font-bold text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
              {{ partner.name }}
            </div>
          </div>
        </div>
      </div>
      
      <!-- Stats Section -->
      <div class="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div 
          v-for="(stat, index) in stats" 
          :key="index"
          class="text-center animate-fade-in-up"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2 animate-count-up">
            {{ stat.value }}
          </div>
          <div class="text-gray-600 dark:text-gray-300">{{ stat.label }}</div>
          <div class="text-sm text-gray-500 dark:text-gray-400">{{ stat.subtitle }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useGlobalI18n } from '~/composables/useGlobalI18n'

const { t } = useGlobalI18n()

const testimonials = computed(() => t('testimonials.items'))

const partners = computed(() => t('testimonials.partners.organizations'))

const stats = computed(() => [
  { value: "1M+", label: t('stats.users'), subtitle: t('stats.usersSubtitle') },
  { value: "50+", label: t('stats.languages'), subtitle: t('stats.languagesSubtitle') },
  { value: "99.9%", label: t('stats.uptime'), subtitle: t('stats.translationsSubtitle') },
  { value: "24/7", label: t('stats.support'), subtitle: t('stats.supportSubtitle') }
])

// Counter animation
onMounted(() => {
  const counters = document.querySelectorAll('.animate-count-up')
  counters.forEach(counter => {
    const target = counter.textContent
    const isNumeric = !isNaN(parseFloat(target))
    
    if (isNumeric) {
      const finalValue = parseFloat(target)
      let currentValue = 0
      const increment = finalValue / 50
      
      const timer = setInterval(() => {
        currentValue += increment
        if (currentValue >= finalValue) {
          counter.textContent = target
          clearInterval(timer)
        } else {
          counter.textContent = Math.floor(currentValue) + (target.includes('.') ? '.9%' : '+')
        }
      }, 30)
    }
  })
})
</script>
