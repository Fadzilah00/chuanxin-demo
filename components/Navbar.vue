<template>
  <nav class="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50 backdrop-blur-md bg-white/90 dark:bg-gray-900/90">
    <div class="container-custom">
      <div class="flex justify-between items-center py-4">
        <!-- Logo with Icon -->
        <NuxtLink to="/" class="flex items-center space-x-3 group">
          <div class="relative">
            <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-pulse-glow">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
            </div>
            <!-- Floating particles around logo -->
            <div class="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-bounce opacity-60"></div>
            <div class="absolute -bottom-1 -left-1 w-2 h-2 bg-yellow-400 rounded-full animate-bounce opacity-60" style="animation-delay: 0.5s;"></div>
          </div>
          <div class="text-2xl font-bold text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform duration-200">
            Chuanxin
          </div>
        </NuxtLink>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink 
            to="/" 
            class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 relative group"
            :class="{ 'text-blue-600 dark:text-blue-400 font-semibold': $route.path === '/' }"
          >
            {{ t('nav.home') }}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </NuxtLink>
          <NuxtLink 
            to="/about" 
            class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 relative group"
            :class="{ 'text-blue-600 dark:text-blue-400 font-semibold': $route.path === '/about' }"
          >
            {{ t('nav.about') }}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </NuxtLink>
          <NuxtLink 
            to="/contact" 
            class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 relative group"
            :class="{ 'text-blue-600 dark:text-blue-400 font-semibold': $route.path === '/contact' }"
          >
            {{ t('nav.contact') }}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </NuxtLink>
          
          <!-- Language Switcher - Rounded Button -->
          <div class="relative">
            <button 
              @click="toggleLanguageMenu"
              class="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
              </svg>
              <span class="text-sm font-semibold">{{ locale.toUpperCase() }}</span>
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            
            <!-- Language Dropdown -->
            <div v-if="isLanguageMenuOpen" class="absolute top-full right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-scale-in">
              <button 
                @click="handleLanguageSwitch('en')"
                class="w-full text-left px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors rounded-lg mx-2"
                :class="{ 'bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-400': locale === 'en' }"
              >
                <div class="flex items-center space-x-3">
                  <span class="text-lg">🇺🇸</span>
                  <span class="font-medium">English</span>
                </div>
              </button>
              <button 
                @click="handleLanguageSwitch('zh')"
                class="w-full text-left px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors rounded-lg mx-2"
                :class="{ 'bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-400': locale === 'zh' }"
              >
                <div class="flex items-center space-x-3">
                  <span class="text-lg">🇨🇳</span>
                  <span class="font-medium">中文</span>
                </div>
              </button>
            </div>
          </div>
          
          <!-- Theme Toggle - Rounded Button -->
          <button 
            @click="toggleTheme"
            class="w-10 h-10 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 dark:from-yellow-500 dark:to-orange-500 dark:hover:from-yellow-600 dark:hover:to-orange-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
          >
            <svg v-if="!isDark" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
            </svg>
            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
            </svg>
          </button>
        </div>
        
        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center space-x-2">
          <!-- Mobile Theme Toggle -->
          <button 
            @click="toggleTheme"
            class="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <svg v-if="!isDark" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
            </svg>
            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
            </svg>
          </button>
          
          <button 
            @click="toggleMobileMenu"
            class="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      
      <!-- Mobile Navigation -->
      <div v-if="isMobileMenuOpen" class="md:hidden pb-4 border-t border-gray-200 dark:border-gray-700 pt-4">
        <div class="flex flex-col space-y-4">
          <NuxtLink 
            to="/" 
            class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 py-2"
            @click="closeMobileMenu"
          >
            {{ t('nav.home') }}
          </NuxtLink>
          <NuxtLink 
            to="/about" 
            class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 py-2"
            @click="closeMobileMenu"
          >
            {{ t('nav.about') }}
          </NuxtLink>
          <NuxtLink 
            to="/contact" 
            class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 py-2"
            @click="closeMobileMenu"
          >
            {{ t('nav.contact') }}
          </NuxtLink>
          
          <!-- Mobile Language Switcher -->
          <div class="flex space-x-4 py-2">
            <button 
              @click="handleLanguageSwitch('en')"
              class="text-sm px-3 py-1 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              :class="{ 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 border-blue-300 dark:border-blue-600': locale === 'en' }"
            >
              🇺🇸 EN
            </button>
            <button 
              @click="handleLanguageSwitch('zh')"
              class="text-sm px-3 py-1 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              :class="{ 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 border-blue-300 dark:border-blue-600': locale === 'zh' }"
            >
              🇨🇳 中文
            </button>
          </div>
          
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const { isDark, toggleTheme } = useTheme()
import { useGlobalI18n } from '~/composables/useGlobalI18n'

const { locale, t, setLocale } = useGlobalI18n()

const isMobileMenuOpen = ref(false)
const isLanguageMenuOpen = ref(false)

// Instant language switching with menu closure
const handleLanguageSwitch = (newLocale) => {
  // Close menus immediately for better UX
  isLanguageMenuOpen.value = false
  isMobileMenuOpen.value = false
  
  // Instant language switch using global state
  setLocale(newLocale)
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  isLanguageMenuOpen.value = false
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const toggleLanguageMenu = () => {
  isLanguageMenuOpen.value = !isLanguageMenuOpen.value
}

const openApp = () => {
  // Navigate to the chat app
  // You can replace this with your actual app URL
  window.open('https://your-chat-app-url.com', '_blank')
}

// Close dropdowns when clicking outside
onMounted(() => {
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.relative')) {
      isLanguageMenuOpen.value = false
    }
  })
})
</script>

