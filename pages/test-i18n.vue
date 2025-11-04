<template>
  <div class="min-h-screen bg-gray-50 py-20">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <!-- Test Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">
            {{ t('hero.tagline') }}
          </h1>
          <p class="text-xl text-gray-600">
            Current Language: <span class="font-bold text-blue-600">{{ locale.toUpperCase() }}</span>
          </p>
        </div>

        <!-- Language Switcher -->
        <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 class="text-2xl font-bold mb-6">Test Language Switching</h2>
          
          <div class="flex space-x-4 mb-8">
            <button 
              @click="setLocale('en')"
              class="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              :class="{ 'ring-2 ring-blue-300': locale === 'en' }"
            >
              🇺🇸 English
            </button>
            <button 
              @click="setLocale('zh')"
              class="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              :class="{ 'ring-2 ring-green-300': locale === 'zh' }"
            >
              🇨🇳 中文
            </button>
          </div>

          <!-- Test Content -->
          <div class="space-y-6">
            <div class="p-4 bg-blue-50 rounded-lg">
              <h3 class="font-semibold text-blue-800 mb-2">Navigation:</h3>
              <p class="text-blue-700">
                {{ t('nav.home') }} | {{ t('nav.about') }} | {{ t('nav.contact') }}
              </p>
            </div>

            <div class="p-4 bg-green-50 rounded-lg">
              <h3 class="font-semibold text-green-800 mb-2">Features:</h3>
              <p class="text-green-700">{{ t('features.chat.title') }}: {{ t('features.chat.description') }}</p>
            </div>

            <div class="p-4 bg-purple-50 rounded-lg">
              <h3 class="font-semibold text-purple-800 mb-2">Footer:</h3>
              <p class="text-purple-700">
                {{ t('footer.description') }}
              </p>
            </div>
          </div>
        </div>

        <!-- Performance Test -->
        <div class="bg-white rounded-lg shadow-lg p-8">
          <h2 class="text-2xl font-bold mb-6">Performance Test</h2>
          <p class="text-gray-600 mb-4">
            Click the language buttons above rapidly to test instant switching.
            All content should update immediately without any delay or page refresh.
          </p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="text-center p-4 bg-gray-100 rounded-lg">
              <div class="text-2xl font-bold text-gray-800">{{ locale === 'en' ? 'EN' : '中文' }}</div>
              <div class="text-sm text-gray-600">Current Language</div>
            </div>
            <div class="text-center p-4 bg-gray-100 rounded-lg">
              <div class="text-2xl font-bold text-gray-800">{{ Date.now() }}</div>
              <div class="text-sm text-gray-600">Timestamp</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useInstantI18n } from '~/composables/useInstantI18n'

const { t, locale, setLocale } = useInstantI18n()

// Meta tags
useHead({
  title: 'i18n Test - Chuanxin',
  meta: [
    { name: 'description', content: 'Test page for instant language switching' }
  ]
})
</script>
