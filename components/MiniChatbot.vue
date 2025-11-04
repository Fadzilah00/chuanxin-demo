<template>
  <div class="fixed bottom-6 right-6 z-50">
    <!-- Chat Toggle Button -->
    <button 
      v-if="!isOpen"
      @click="toggleChat"
      class="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-pulse-glow"
    >
      <svg class="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
      </svg>
    </button>
    
    <!-- Chat Window -->
    <div 
      v-if="isOpen"
      class="w-80 h-96 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col animate-scale-in"
    >
      <!-- Header -->
      <div class="bg-blue-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
          </div>
          <div>
            <h3 class="font-semibold">Chuanxin Support</h3>
            <p class="text-xs text-blue-100">Online now</p>
          </div>
        </div>
        <button @click="toggleChat" class="text-white/80 hover:text-white">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      
      <!-- Messages -->
      <div class="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin">
        <div class="flex items-start space-x-2">
          <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
            C
          </div>
          <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 max-w-xs">
            <p class="text-sm text-gray-800 dark:text-gray-200">Hello! How can I help you today?</p>
          </div>
        </div>
        
        <div v-for="(message, index) in messages" :key="index" class="flex items-start space-x-2">
          <div class="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center text-white text-xs font-bold">
            U
          </div>
          <div class="bg-blue-500 text-white rounded-lg p-3 max-w-xs">
            <p class="text-sm">{{ message }}</p>
          </div>
        </div>
        
        <div v-if="isTyping" class="flex items-start space-x-2">
          <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
            C
          </div>
          <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
            <div class="flex space-x-1">
              <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
              <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.1s;"></div>
              <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s;"></div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Input -->
      <div class="p-4 border-t border-gray-200 dark:border-gray-700">
        <form @submit.prevent="sendMessage" class="flex space-x-2">
          <input
            v-model="newMessage"
            type="text"
            placeholder="Type your message..."
            class="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm dark:bg-gray-700 dark:text-white"
            :disabled="isTyping"
          />
          <button
            type="submit"
            :disabled="!newMessage.trim() || isTyping"
            class="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg transition-colors duration-200 text-sm"
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

const toggleChat = () => {
  isOpen.value = !isOpen.value
}

const sendMessage = async () => {
  if (!newMessage.value.trim()) return
  
  messages.value.push(newMessage.value)
  const userMessage = newMessage.value
  newMessage.value = ''
  
  // Simulate typing
  isTyping.value = true
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  // Simulate bot response
  const responses = [
    "Thanks for your message! Our team will get back to you soon.",
    "I understand your question. Let me help you with that.",
    "That's a great question! Here's what I can tell you...",
    "I'm here to help! Can you provide more details?",
    "Thanks for reaching out! We appreciate your interest in Chuanxin."
  ]
  
  const randomResponse = responses[Math.floor(Math.random() * responses.length)]
  
  // Add bot response (simulated)
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
