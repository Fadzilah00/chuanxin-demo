<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
    <!-- Hero Section with Animated Background -->
    <section class="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-800 dark:via-purple-800 dark:to-pink-800">
      <!-- Animated Background Elements -->
      <div class="absolute inset-0">
        <div class="absolute top-20 left-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div class="absolute top-40 right-10 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style="animation-delay: 2s;"></div>
        <div class="absolute bottom-20 left-1/2 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style="animation-delay: 4s;"></div>
      </div>
      
      <div class="relative container-custom section-padding text-center">
        <div class="max-w-5xl mx-auto">
          <div class="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 animate-fade-in-up">
            <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span class="text-white font-medium">About Chuanxin</span>
          </div>
          
          <h1 class="text-6xl md:text-7xl font-bold text-white dark:text-gray-100 mb-8 animate-fade-in-up" style="animation-delay: 0.2s;">
            {{ t('about.title') }}
          </h1>
          <p class="text-xl md:text-2xl text-purple-100 dark:text-purple-200 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style="animation-delay: 0.4s;">
            {{ t('about.subtitle') }}
          </p>
          
          <!-- Floating Stats -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-in-up" style="animation-delay: 0.6s;">
            <div class="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300">
              <div class="text-3xl font-bold text-white dark:text-gray-100 mb-2">1M+</div>
              <div class="text-purple-100 dark:text-purple-200">Active Users</div>
            </div>
            <div class="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300">
              <div class="text-3xl font-bold text-white dark:text-gray-100 mb-2">50+</div>
              <div class="text-purple-100 dark:text-purple-200">Languages</div>
            </div>
            <div class="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300">
              <div class="text-3xl font-bold text-white dark:text-gray-100 mb-2">99.9%</div>
              <div class="text-purple-100 dark:text-purple-200">Uptime</div>
            </div>
            <div class="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300">
              <div class="text-3xl font-bold text-white dark:text-gray-100 mb-2">24/7</div>
              <div class="text-purple-100 dark:text-purple-200">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Company Story with Timeline -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">{{ t('about.story.title') }}</h2>
            <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
          </div>
          
          <!-- Timeline -->
          <div class="relative">
            <!-- Timeline Line -->
            <div class="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
            
            <!-- Timeline Items -->
            <div class="space-y-16">
              <!-- 2020 -->
              <div class="relative flex items-center">
                <div class="w-1/2 pr-8 text-right">
                  <div class="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/50 dark:to-purple-900/50 rounded-2xl p-8 shadow-lg border border-blue-100 dark:border-blue-800">
                    <div class="text-blue-600 font-bold text-lg mb-2">2020</div>
                    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">The Beginning</h3>
                    <p class="text-gray-600 dark:text-gray-300 leading-relaxed">{{ t('about.story.content1') }}</p>
                  </div>
                </div>
                <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
                <div class="w-1/2 pl-8"></div>
              </div>
              
              <!-- 2021 -->
              <div class="relative flex items-center">
                <div class="w-1/2 pr-8"></div>
                <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-purple-500 rounded-full border-4 border-white shadow-lg"></div>
                <div class="w-1/2 pl-8">
                  <div class="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/50 dark:to-pink-900/50 rounded-2xl p-8 shadow-lg border border-purple-100 dark:border-purple-800">
                    <div class="text-purple-600 font-bold text-lg mb-2">2021</div>
                    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Building the Vision</h3>
                    <p class="text-gray-600 dark:text-gray-300 leading-relaxed">{{ t('about.story.content2') }}</p>
                  </div>
                </div>
              </div>
              
              <!-- 2024 -->
              <div class="relative flex items-center">
                <div class="w-1/2 pr-8 text-right">
                  <div class="bg-gradient-to-r from-pink-50 to-indigo-50 dark:from-pink-900/50 dark:to-indigo-900/50 rounded-2xl p-8 shadow-lg border border-pink-100 dark:border-pink-800">
                    <div class="text-pink-600 font-bold text-lg mb-2">2024</div>
                    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Global Impact</h3>
                    <p class="text-gray-600 dark:text-gray-300 leading-relaxed">{{ t('about.story.content3') }}</p>
                  </div>
                </div>
                <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-pink-500 rounded-full border-4 border-white shadow-lg"></div>
                <div class="w-1/2 pl-8"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision Cards -->
    <section class="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900 section-padding">
      <div class="container-custom">
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Mission Card -->
            <div class="group">
              <div class="bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 transform hover:-translate-y-2">
                <div class="text-center mb-8">
                  <div class="bg-gradient-to-r from-blue-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <h3 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">{{ t('about.mission.title') }}</h3>
                </div>
                <p class="text-gray-600 dark:text-gray-300 text-lg leading-relaxed text-center">
                  {{ t('about.mission.description') }}
                </p>
              </div>
            </div>
            
            <!-- Vision Card -->
            <div class="group">
              <div class="bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 transform hover:-translate-y-2">
                <div class="text-center mb-8">
                  <div class="bg-gradient-to-r from-purple-500 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                  </div>
                  <h3 class="text-3xl font-bold text-gray-900 mb-4">{{ t('about.vision.title') }}</h3>
                </div>
                <p class="text-gray-600 text-lg leading-relaxed text-center">
                  {{ t('about.vision.description') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">{{ t('about.values.title') }}</h2>
            <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {{ t('about.values.subtitle') }}
            </p>
            <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-6"></div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Innovation -->
            <div class="group">
              <div class="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-blue-800 transform hover:-translate-y-2">
                <div class="text-center">
                  <div class="bg-gradient-to-r from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                    </svg>
                  </div>
                  <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">{{ t('about.values.innovation.title') }}</h3>
                  <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {{ t('about.values.innovation.description') }}
                  </p>
                </div>
              </div>
            </div>
            
            <!-- Accessibility -->
            <div class="group">
              <div class="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 dark:border-green-800 transform hover:-translate-y-2">
                <div class="text-center">
                  <div class="bg-gradient-to-r from-green-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                  </div>
                  <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">{{ t('about.values.accessibility.title') }}</h3>
                  <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {{ t('about.values.accessibility.description') }}
                  </p>
                </div>
              </div>
            </div>
            
            <!-- Community -->
            <div class="group">
              <div class="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 dark:border-purple-800 transform hover:-translate-y-2">
                <div class="text-center">
                  <div class="bg-gradient-to-r from-purple-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">{{ t('about.values.community.title') }}</h3>
                  <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {{ t('about.values.community.description') }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 section-padding">
      <div class="container-custom">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">Meet Our Team</h2>
            <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The passionate individuals behind Chuanxin's success
            </p>
            <div class="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mt-6"></div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Team Member 1 -->
            <div class="group">
              <div class="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 transform hover:-translate-y-2">
                <div class="text-center">
                  <div class="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                    AC
                  </div>
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Alex Chen</h3>
                  <p class="text-blue-600 dark:text-blue-400 font-medium mb-4">CEO & Co-Founder</p>
                  <p class="text-gray-600 dark:text-gray-300 text-sm">Visionary leader with 10+ years in AI and language technology</p>
                </div>
              </div>
            </div>
            
            <!-- Team Member 2 -->
            <div class="group">
              <div class="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 transform hover:-translate-y-2">
                <div class="text-center">
                  <div class="w-24 h-24 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                    MW
                  </div>
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Maria Wang</h3>
                  <p class="text-green-600 dark:text-green-400 font-medium mb-4">CTO & Co-Founder</p>
                  <p class="text-gray-600 dark:text-gray-300 text-sm">Technical architect passionate about breaking language barriers</p>
                </div>
              </div>
            </div>
            
            <!-- Team Member 3 -->
            <div class="group">
              <div class="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 transform hover:-translate-y-2">
                <div class="text-center">
                  <div class="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                    DK
                  </div>
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">David Kim</h3>
                  <p class="text-purple-600 dark:text-purple-400 font-medium mb-4">Head of AI Research</p>
                  <p class="text-gray-600 dark:text-gray-300 text-sm">Leading our AI research and machine learning initiatives</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { useGlobalI18n } from '~/composables/useGlobalI18n'

const { t, locale } = useGlobalI18n()

// Meta tags for SEO
useHead({
  title: 'About Us - Chuanxin',
  meta: [
    { name: 'description', content: 'Learn about Chuanxin\'s mission to break down language barriers and connect people across the globe through innovative chat and translation technology.' }
  ]
})

const openApp = () => {
  // Navigate to the QQLink app
  window.open('https://qqlink.com/en', '_blank')
}

const scrollToContact = () => {
  // Navigate to contact page
  navigateTo('/contact')
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
}

.animate-fade-in-up:nth-child(2) {
  animation-delay: 0.2s;
}

.animate-fade-in-up:nth-child(3) {
  animation-delay: 0.4s;
}

.animate-fade-in-up:nth-child(4) {
  animation-delay: 0.6s;
}
</style>