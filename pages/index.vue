<template>
  <div>
    <!-- Animated Hero Section -->
    <AnimatedHero />
    
    <!-- Enhanced Feature Showcase -->
    <EnhancedFeatureShowcase />
    
    <!-- Testimonials & Partners -->
    <TestimonialsSection />
    
    <!-- Interactive World Map -->
    <InteractiveWorldMap />
    
  </div>
</template>

<script setup>
import { useGlobalI18n } from '~/composables/useGlobalI18n'

const { t, locale } = useGlobalI18n()

// Meta tags for SEO
useHead({
  title: 'Chuanxin - China\'s QQLink',
  meta: [
    { name: 'description', content: 'Chuanxin - China\'s QQLink. Chat & Translate made simple. Connect with people across language barriers.' }
  ]
})

const openApp = () => {
  // Navigate to the chat app
  // You can replace this with your actual app URL
  window.open('https://qqlink.com/en', '_blank')
}
</script>
