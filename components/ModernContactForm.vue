<template>
  <div class="max-w-2xl mx-auto">
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">{{ t('contact.form.title') }}</h2>
    
    <form @submit.prevent="submitForm" class="space-y-8">
      <!-- Name Field -->
      <div class="relative group">
        <input
          id="name"
          v-model="form.name"
          type="text"
          required
          class="w-full px-4 py-4 bg-transparent border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 text-gray-900 dark:text-white"
          :class="{ 'border-blue-500': form.name }"
        />
        <label 
          for="name"
          class="absolute left-4 transition-all duration-300 pointer-events-none"
          :class="form.name ? 'top-2 text-xs text-blue-500 bg-white dark:bg-gray-900 px-2' : 'top-4 text-gray-500 dark:text-gray-400'"
        >
          {{ t('contact.form.name') }}
        </label>
        <div class="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10"></div>
      </div>
      
      <!-- Email Field -->
      <div class="relative group">
        <input
          id="email"
          v-model="form.email"
          type="email"
          required
          class="w-full px-4 py-4 bg-transparent border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 text-gray-900 dark:text-white"
          :class="{ 'border-blue-500': form.email }"
        />
        <label 
          for="email"
          class="absolute left-4 transition-all duration-300 pointer-events-none"
          :class="form.email ? 'top-2 text-xs text-blue-500 bg-white dark:bg-gray-900 px-2' : 'top-4 text-gray-500 dark:text-gray-400'"
        >
          {{ t('contact.form.email') }}
        </label>
        <div class="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10"></div>
      </div>
      
      <!-- Inquiry Type -->
      <div class="relative group">
        <label 
          for="inquiryType"
          class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3"
        >
          {{ t('contact.form.inquiryType') }}
        </label>
        <select
          id="inquiryType"
          v-model="form.inquiryType"
          required
          class="w-full px-4 py-5 bg-transparent border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 text-gray-900 dark:text-white appearance-none cursor-pointer"
          :class="{ 'border-blue-500': form.inquiryType }"
        >
          <option value="">{{ t('contact.form.inquiryOptions.placeholder') }}</option>
          <option value="general">{{ t('contact.form.inquiryOptions.general') }}</option>
          <option value="support">{{ t('contact.form.inquiryOptions.support') }}</option>
          <option value="business">{{ t('contact.form.inquiryOptions.business') }}</option>
          <option value="feedback">{{ t('contact.form.inquiryOptions.feedback') }}</option>
          <option value="other">{{ t('contact.form.inquiryOptions.other') }}</option>
        </select>
        <div class="absolute right-4 top-12 transform -translate-y-1/2 pointer-events-none">
          <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
        <div class="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10"></div>
      </div>
      
      <!-- Message Field -->
      <div class="relative group">
        <textarea
          id="message"
          v-model="form.message"
          required
          rows="6"
          class="w-full px-4 py-4 bg-transparent border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 text-gray-900 dark:text-white resize-none"
          :class="{ 'border-blue-500': form.message }"
          placeholder=""
        ></textarea>
        <label 
          for="message"
          class="absolute left-4 transition-all duration-300 pointer-events-none"
          :class="form.message ? 'top-2 text-xs text-blue-500 bg-white dark:bg-gray-900 px-2' : 'top-4 text-gray-500 dark:text-gray-400'"
        >
          {{ t('contact.form.message') }}
        </label>
        <div class="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10"></div>
      </div>
      
      <!-- Animated Send Button -->
      <div class="text-center">
        <button 
          type="submit" 
          :disabled="isSubmitting"
          class="relative group overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-12 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
            <span class="relative z-10 flex items-center space-x-2">
              <span>{{ isSubmitting ? t('contact.form.sending') : t('contact.form.send') }}</span>
            <svg v-if="!isSubmitting" class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
            </svg>
            <svg v-else class="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
          </span>
          
          <!-- Animated Background -->
          <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <!-- Glowing Effect -->
          <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
          
          <!-- Ripple Effect -->
          <div v-if="isSubmitting" class="absolute inset-0 bg-white opacity-20 animate-ping"></div>
        </button>
      </div>
    </form>
    
    <!-- Social Media Icons -->
    <div class="mt-12 text-center">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-6">{{ t('contact.connectUs') }}</h3>
      <div class="flex justify-center space-x-6">
        <a href="#" class="group w-12 h-12 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
          <svg class="w-6 h-6 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </a>
        
        <a href="#" class="group w-12 h-12 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
          <svg class="w-6 h-6 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
          </svg>
        </a>
        
        <a href="#" class="group w-12 h-12 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
          <svg class="w-6 h-6 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useGlobalI18n } from '~/composables/useGlobalI18n'

const { t } = useGlobalI18n()

// Form data
const form = reactive({
  name: '',
  email: '',
  inquiryType: '',
  message: ''
})

const isSubmitting = ref(false)

const submitForm = async () => {
  isSubmitting.value = true
  
  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    form.name = ''
    form.email = ''
    form.inquiryType = ''
    form.message = ''
    
    // Show success message
    alert('Thank you for your message! We\'ll get back to you soon.')
    
  } catch (error) {
    console.error('Error submitting form:', error)
    alert('Sorry, there was an error sending your message. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}
</script>
