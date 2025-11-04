<template>
  <section class="section-padding bg-white dark:bg-gray-900">
    <div class="container-custom">
      <!-- Title -->
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in-up">
          {{ t('globalSupport.title') }}
        </h2>
        <p
          class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in-up"
          style="animation-delay: 0.2s;"
        >
          {{ t('globalSupport.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Interactive Map -->
        <div class="animate-fade-in-left">
          <div class="relative bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 overflow-hidden">
            <svg
              viewBox="0 0 800 400"
              class="w-full h-96"
              @click="handleMapClick"
            >
              <!-- North America -->
              <path
                d="M100 80 L300 80 L320 120 L300 160 L200 180 L120 160 Z"
                :class="getRegionClass('north-america')"
                @click.stop="selectRegion('north-america')"
                class="cursor-pointer transition-all duration-300 hover:opacity-80"
              />

              <!-- South America -->
              <path
                d="M200 200 L280 200 L300 280 L250 320 L200 300 Z"
                :class="getRegionClass('south-america')"
                @click.stop="selectRegion('south-america')"
                class="cursor-pointer transition-all duration-300 hover:opacity-80"
              />

              <!-- Europe -->
              <path
                d="M350 60 L500 60 L520 100 L480 140 L400 120 Z"
                :class="getRegionClass('europe')"
                @click.stop="selectRegion('europe')"
                class="cursor-pointer transition-all duration-300 hover:opacity-80"
              />

              <!-- Africa -->
              <path
                d="M400 150 L500 150 L520 250 L480 300 L400 280 Z"
                :class="getRegionClass('africa')"
                @click.stop="selectRegion('africa')"
                class="cursor-pointer transition-all duration-300 hover:opacity-80"
              />

              <!-- Asia -->
              <path
                d="M550 80 L750 80 L780 120 L750 200 L650 220 L550 180 Z"
                :class="getRegionClass('asia')"
                @click.stop="selectRegion('asia')"
                class="cursor-pointer transition-all duration-300 hover:opacity-80"
              />

              <!-- Australia -->
              <path
                d="M650 280 L750 280 L770 320 L720 350 L650 330 Z"
                :class="getRegionClass('australia')"
                @click.stop="selectRegion('australia')"
                class="cursor-pointer transition-all duration-300 hover:opacity-80"
              />
            </svg>

            <!-- Floating Language Icons -->
            <div class="absolute top-4 right-4 flex space-x-2">
              <div
                v-for="(lang, index) in floatingLanguages"
                :key="index"
                class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-float"
                :style="{ animationDelay: `${index * 0.5}s` }"
              >
                {{ lang }}
              </div>
            </div>
          </div>
        </div>

        <!-- Region Information -->
        <div class="animate-fade-in-right">
          <div
            v-if="selectedRegion"
            class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8"
          >
            <div class="flex items-center mb-6">
              <div
                class="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl"
              >
                {{ selectedRegion.flag }}
              </div>
              <div class="ml-4">
                <h3
                  class="text-2xl font-bold text-gray-900 dark:text-white"
                >
                  {{ selectedRegion.name }}
                </h3>
                <p class="text-gray-600 dark:text-gray-300">
                  {{ selectedRegion.users }} {{ t('globalSupport.stats.users') }}
                </p>
              </div>
            </div>

            <!-- Supported Languages -->
            <div class="mb-6">
              <h4
                class="text-lg font-semibold text-gray-900 dark:text-white mb-3"
              >
                {{ t('globalSupport.stats.languages') }}
              </h4>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="language in selectedRegion.languages"
                  :key="language"
                  class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                >
                  {{ language }}
                </span>
              </div>
            </div>

            <!-- Statistics -->
            <div class="grid grid-cols-2 gap-4">
              <div
                class="text-center p-4 bg-white dark:bg-gray-700 rounded-lg"
              >
                <div
                  class="text-2xl font-bold text-blue-600 dark:text-blue-400"
                >
                  {{ selectedRegion.messages }}
                </div>
                <div class="text-sm text-gray-600 dark:text-gray-300">
                  {{ t('globalSupport.stats.messages') }}
                </div>
              </div>
              <div
                class="text-center p-4 bg-white dark:bg-gray-700 rounded-lg"
              >
                <div
                  class="text-2xl font-bold text-green-600 dark:text-green-400"
                >
                  {{ selectedRegion.translations }}
                </div>
                <div class="text-sm text-gray-600 dark:text-gray-300">
                  {{ t('globalSupport.stats.translations') }}
                </div>
              </div>
            </div>
          </div>

          <div v-else class="text-center py-12">
            <div
              class="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-8 h-8 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                />
              </svg>
            </div>
            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-2"
            >
              {{ t('globalSupport.noSelection.title') }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              {{ t('globalSupport.noSelection.subtitle') }}
            </p>
          </div>
        </div>
      </div>

      <!-- Global Stats -->
      <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(stat, index) in globalStats"
          :key="index"
          class="text-center animate-fade-in-up"
          :style="{ animationDelay: `${index * 0.2}s` }"
        >
          <div
            class="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-slow"
          >
            <svg
              class="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
              />
            </svg>
          </div>
          <div
            class="text-3xl font-bold text-gray-900 dark:text-white mb-2"
          >
            {{ stat.value }}
          </div>
          <div class="text-gray-600 dark:text-gray-300">
            {{ stat.label }}
          </div>
          <div class="text-sm text-gray-500 dark:text-gray-400">
            {{ stat.subtitle }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from "vue"
import { useGlobalI18n } from '~/composables/useGlobalI18n'

const { t } = useGlobalI18n()
const selectedRegion = ref(null)
const floatingLanguages = ref(["EN", "中", "ES", "FR", "DE"])

const regions = computed(() => ({
  "north-america": {
    name: t('globalSupport.regions.northAmerica'),
    flag: "🇺🇸",
    users: "450K",
    languages: [t('globalSupport.languages.english'), t('globalSupport.languages.spanish'), t('globalSupport.languages.french')],
    messages: "2.1M",
    translations: "850K",
  },
  "south-america": {
    name: t('globalSupport.regions.southAmerica'),
    flag: "🇧🇷",
    users: "320K",
    languages: [t('globalSupport.languages.spanish'), t('globalSupport.languages.portuguese'), t('globalSupport.languages.english')],
    messages: "1.8M",
    translations: "720K",
  },
  europe: {
    name: t('globalSupport.regions.europe'),
    flag: "🇪🇺",
    users: "280K",
    languages: [t('globalSupport.languages.english'), t('globalSupport.languages.german'), t('globalSupport.languages.french'), t('globalSupport.languages.spanish'), t('globalSupport.languages.italian')],
    messages: "1.5M",
    translations: "650K",
  },
  africa: {
    name: t('globalSupport.regions.africa'),
    flag: "🇿🇦",
    users: "180K",
    languages: [t('globalSupport.languages.english'), t('globalSupport.languages.french'), t('globalSupport.languages.arabic')],
    messages: "950K",
    translations: "420K",
  },
  asia: {
    name: t('globalSupport.regions.asia'),
    flag: "🇨🇳",
    users: "520K",
    languages: [t('globalSupport.languages.chinese'), t('globalSupport.languages.japanese'), t('globalSupport.languages.korean'), t('globalSupport.languages.english'), t('globalSupport.languages.hindi')],
    messages: "3.2M",
    translations: "1.8M",
  },
  australia: {
    name: t('globalSupport.regions.oceania'),
    flag: "🇦🇺",
    users: "95K",
    languages: [t('globalSupport.languages.english'), t('globalSupport.languages.french'), t('globalSupport.languages.spanish')],
    messages: "480K",
    translations: "180K",
  },
}))

const globalStats = computed(() => [
  { value: "1.8M+", label: t('stats.users'), subtitle: t('stats.usersSubtitle') },
  { value: "50+", label: t('stats.languages'), subtitle: t('stats.languagesSubtitle') },
  { value: "10M+", label: t('stats.translations'), subtitle: t('stats.translationsSubtitle') },
])

const selectRegion = (regionKey) => {
  selectedRegion.value = regions.value[regionKey]
}

const getRegionClass = (regionKey) => {
  const baseClass =
    "fill-blue-200 dark:fill-blue-800 stroke-blue-400 dark:stroke-blue-600 stroke-2"
  const selectedClass =
    selectedRegion.value &&
    selectedRegion.value.name === regions.value[regionKey].name
      ? "fill-blue-400 dark:fill-blue-600"
      : ""
  return `${baseClass} ${selectedClass}`
}

const handleMapClick = (event) => {
  // reset only if click outside any path
  if (event.target.tagName === "svg") {
    selectedRegion.value = null
  }
}

onMounted(() => {
  setInterval(() => {
    floatingLanguages.value = [
      ...floatingLanguages.value.slice(1),
      floatingLanguages.value[0],
    ]
  }, 2000)
})
</script>
