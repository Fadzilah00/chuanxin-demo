<template>
  <div class="fixed bottom-6 right-6 z-50">
    <!-- Chat Toggle Button with Enhanced Animation -->
    <button 
      v-if="!isOpen"
      @click="toggleChat"
      class="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 animate-pulse-glow group"
    >
      <svg class="w-7 h-7 mx-auto group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
      </svg>
      <!-- Notification Badge -->
      <div class="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-bounce">
        3
      </div>
    </button>
    
    <!-- Enhanced Chat Window -->
    <div 
      v-if="isOpen"
      class="w-96 h-[500px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col animate-scale-in"
    >
      <!-- Enhanced Header -->
      <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <div class="relative">
            <div class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
            </div>
            <div class="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
          </div>
          <div>
            <h3 class="font-semibold">Chuanxin Support</h3>
            <p class="text-xs text-blue-100">Online now • Auto-translate enabled</p>
          </div>
        </div>
        <button @click="toggleChat" class="text-white/80 hover:text-white transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      
      <!-- Quick Language Switch -->
      <div class="bg-gray-50 dark:bg-gray-700 px-4 py-2 border-b border-gray-200 dark:border-gray-600">
        <div class="flex items-center justify-between">
          <span class="text-xs text-gray-600 dark:text-gray-300">Quick Translate:</span>
          <div class="flex space-x-2">
            <button 
              @click="setQuickLanguage('en')"
              class="px-2 py-1 text-xs rounded-full transition-colors duration-200"
              :class="quickLanguage === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300'"
            >
              EN
            </button>
            <button 
              @click="setQuickLanguage('zh')"
              class="px-2 py-1 text-xs rounded-full transition-colors duration-200"
              :class="quickLanguage === 'zh' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300'"
            >
              中文
            </button>
          </div>
        </div>
      </div>
      
      <!-- Enhanced Messages -->
      <div class="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin">
        <!-- Bot Welcome Message -->
        <div class="flex items-start space-x-2 animate-fade-in-up">
          <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
            C
          </div>
          <div class="bg-gray-100 dark:bg-gray-700 rounded-2xl rounded-bl-md p-3 max-w-xs animate-fade-in-left">
            <p class="text-sm text-gray-800 dark:text-gray-200">Hello! How can I help you today?</p>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">Just now</p>
          </div>
        </div>
        
        <!-- User Messages with Animation -->
        <div v-for="(message, index) in messages" :key="index" class="flex justify-end animate-fade-in-up" :style="{ animationDelay: `${index * 0.1}s` }">
          <div class="bg-blue-500 text-white rounded-2xl rounded-br-md p-3 max-w-xs animate-fade-in-right">
            <p class="text-sm">{{ message.text }}</p>
            <p class="text-xs text-blue-100 mt-1">{{ message.time }}</p>
          </div>
        </div>
        
        <!-- Auto-Translate Preview -->
        <div v-if="showTranslation" class="flex justify-end animate-scale-in">
          <div class="bg-green-100 dark:bg-green-900 rounded-2xl rounded-br-md p-3 max-w-xs border-l-4 border-green-500">
            <div class="flex items-center space-x-2 mb-1">
              <svg class="w-4 h-4 text-green-600 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
              </svg>
              <span class="text-xs text-green-600 dark:text-green-400 font-medium">Auto-translated</span>
            </div>
            <p class="text-sm text-gray-800 dark:text-gray-200">{{ translatedText }}</p>
          </div>
        </div>
        
        <!-- Enhanced Typing Indicator -->
        <div v-if="isTyping" class="flex items-start space-x-2 animate-fade-in-up">
          <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
            C
          </div>
          <div class="bg-gray-100 dark:bg-gray-700 rounded-2xl rounded-bl-md p-3">
            <div class="flex space-x-1">
              <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
              <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.1s;"></div>
              <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s;"></div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Enhanced Input with Language Indicator -->
      <div class="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700">
        <form @submit.prevent="sendMessage" class="flex space-x-2">
          <div class="flex-1 relative">
            <input
              v-model="newMessage"
              type="text"
              :placeholder="t('chat.placeholder')"
              class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm dark:bg-gray-800 dark:text-white transition-all duration-200"
              :disabled="isTyping"
            />
            <!-- Language Indicator -->
            <div class="absolute right-3 top-1/2 transform -translate-y-1/2">
              <span class="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full">
                {{ quickLanguage.toUpperCase() }}
              </span>
            </div>
          </div>
          <button
            type="submit"
            :disabled="!newMessage.trim() || isTyping"
            class="px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white rounded-xl transition-all duration-200 text-sm font-semibold transform hover:scale-105 disabled:transform-none"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
            </svg>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
const isOpen = ref(false)
const newMessage = ref('')
const messages = ref([])
const isTyping = ref(false)
const quickLanguage = ref('en')
const showTranslation = ref(false)
const translatedText = ref('')

const toggleChat = () => {
  isOpen.value = !isOpen.value
}

const setQuickLanguage = (lang) => {
  quickLanguage.value = lang
}

const sendMessage = async () => {
  if (!newMessage.value.trim()) return
  
  const userMessage = {
    text: newMessage.value,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }
  
  messages.value.push(userMessage)
  const messageText = newMessage.value
  newMessage.value = ''
  
  // Show typing indicator
  isTyping.value = true
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  // Show auto-translation if different language
  if (quickLanguage.value === 'zh' && messageText.includes('hello')) {
    showTranslation.value = true
    translatedText.value = '你好！很高兴认识你'
    setTimeout(() => {
      showTranslation.value = false
    }, 3000)
  }
  
  // Simulate bot response
  const responses = [
    t('chat.responses.thanks'),
    t('chat.responses.understand'),
    t('chat.responses.great'),
    t('chat.responses.help'),
    t('chat.responses.interest')
  ]
  
  const randomResponse = responses[Math.floor(Math.random() * responses.length)]
  
  setTimeout(() => {
    isTyping.value = false
    // In a real implementation, you would add the bot response to messages
  }, 2000)
}

// Close chat when clicking outside
onMounted(() => {
  document.addEventListener('click', (e) => {
    if (isOpen.value && !e.target.closest('.fixed')) {
      isOpen.value = false
    }
  })
})
</script>
