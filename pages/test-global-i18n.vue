<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <!-- Test Header -->
        <div class="text-center mb-12">
          <h1 class="text-5xl font-bold text-gray-900 mb-4">
            {{ t('hero.tagline') }}
          </h1>
          <div class="flex items-center justify-center space-x-4">
            <p class="text-xl text-gray-600">
              Current Language:
            </p>
            <span class="text-2xl font-bold text-blue-600 bg-white px-4 py-2 rounded-lg shadow-lg">
              {{ locale.toUpperCase() }}
            </span>
          </div>
        </div>

        <!-- Language Switcher -->
        <div class="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 class="text-3xl font-bold mb-6 text-center">🚀 Global i18n Test</h2>
          
          <div class="flex justify-center space-x-6 mb-8">
            <button 
              @click="setLocale('en')"
              class="px-8 py-4 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
              :class="{ 'ring-4 ring-blue-300 scale-105': locale === 'en' }"
            >
              🇺🇸 English
            </button>
            <button 
              @click="setLocale('zh')"
              class="px-8 py-4 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
              :class="{ 'ring-4 ring-green-300 scale-105': locale === 'zh' }"
            >
              🇨🇳 中文
            </button>
          </div>

          <!-- Real-time Status -->
          <div class="text-center mb-8">
            <div class="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
              <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span class="font-semibold">✅ Global State Active</span>
            </div>
          </div>

          <!-- Test Content Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Navigation Test -->
            <div class="p-6 bg-blue-50 rounded-xl">
              <h3 class="font-bold text-blue-800 mb-4 flex items-center">
                <span class="mr-2">🧭</span>
                Navigation
              </h3>
              <div class="space-y-2 text-blue-700">
                <div>{{ t('nav.home') }}</div>
                <div>{{ t('nav.about') }}</div>
                <div>{{ t('nav.contact') }}</div>
              </div>
            </div>

            <!-- Features Test -->
            <div class="p-6 bg-green-50 rounded-xl">
              <h3 class="font-bold text-green-800 mb-4 flex items-center">
                <span class="mr-2">⚡</span>
                Features
              </h3>
              <div class="space-y-2 text-green-700">
                <div class="font-semibold">{{ t('features.chat.title') }}</div>
                <div class="text-sm">{{ t('features.chat.description') }}</div>
              </div>
            </div>

            <!-- Footer Test -->
            <div class="p-6 bg-purple-50 rounded-xl">
              <h3 class="font-bold text-purple-800 mb-4 flex items-center">
                <span class="mr-2">📄</span>
                Footer
              </h3>
              <div class="space-y-2 text-purple-700">
                <div>{{ t('footer.quickLinks') }}</div>
                <div>{{ t('footer.support') }}</div>
                <div class="text-sm">{{ t('footer.description') }}</div>
              </div>
            </div>

            <!-- Contact Test -->
            <div class="p-6 bg-orange-50 rounded-xl">
              <h3 class="font-bold text-orange-800 mb-4 flex items-center">
                <span class="mr-2">📞</span>
                Contact
              </h3>
              <div class="space-y-2 text-orange-700">
                <div>{{ t('contact.form.title') }}</div>
                <div>{{ t('contact.form.name') }}</div>
                <div>{{ t('contact.form.email') }}</div>
              </div>
            </div>

            <!-- About Test -->
            <div class="p-6 bg-red-50 rounded-xl">
              <h3 class="font-bold text-red-800 mb-4 flex items-center">
                <span class="mr-2">ℹ️</span>
                About
              </h3>
              <div class="space-y-2 text-red-700">
                <div class="font-semibold">{{ t('about.mission.title') }}</div>
                <div class="text-sm">{{ t('about.mission.description') }}</div>
              </div>
            </div>

            <!-- Stats Test -->
            <div class="p-6 bg-indigo-50 rounded-xl">
              <h3 class="font-bold text-indigo-800 mb-4 flex items-center">
                <span class="mr-2">📊</span>
                Statistics
              </h3>
              <div class="space-y-2 text-indigo-700">
                <div>{{ t('stats.users') }}</div>
                <div>{{ t('stats.languages') }}</div>
                <div>{{ t('stats.uptime') }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Performance Monitor -->
        <div class="bg-white rounded-2xl shadow-xl p-8">
          <h2 class="text-2xl font-bold mb-6 text-center">⚡ Performance Monitor</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="text-center p-6 bg-gray-50 rounded-xl">
              <div class="text-3xl font-bold text-gray-800 mb-2">{{ locale === 'en' ? 'EN' : '中文' }}</div>
              <div class="text-sm text-gray-600">Current Language</div>
            </div>
            <div class="text-center p-6 bg-gray-50 rounded-xl">
              <div class="text-3xl font-bold text-gray-800 mb-2">{{ Date.now() }}</div>
              <div class="text-sm text-gray-600">Live Timestamp</div>
            </div>
            <div class="text-center p-6 bg-gray-50 rounded-xl">
              <div class="text-3xl font-bold text-green-600 mb-2">✅</div>
              <div class="text-sm text-gray-600">Instant Updates</div>
            </div>
          </div>

          <div class="mt-8 text-center">
            <p class="text-gray-600 mb-4">
              Click the language buttons above rapidly to test instant switching.
              All content should update immediately without any delay.
            </p>
            <div class="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-6 py-3 rounded-full">
              <div class="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <span class="font-semibold">Global State: {{ locale }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useGlobalI18n } from '~/composables/useGlobalI18n'

const { t, locale, setLocale } = useGlobalI18n()

// Meta tags
useHead({
  title: 'Global i18n Test - Chuanxin',
  meta: [
    { name: 'description', content: 'Test page for global i18n with instant language switching' }
  ]
})
</script>
