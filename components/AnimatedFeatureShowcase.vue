<template>
  <section id="features" class="section-padding bg-white dark:bg-gray-900">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in-up">
          {{ t('features.title') }}
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in-up" style="animation-delay: 0.2s;">
          {{ t('features.subtitle') }}
        </p>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Chat Feature with Animation -->
        <div class="animate-fade-in-left">
          <div class="relative">
            <!-- Phone Mockup -->
            <div class="relative mx-auto w-80 h-96 bg-gray-900 dark:bg-gray-800 rounded-3xl p-4 shadow-2xl">
              <!-- Screen -->
              <div class="w-full h-full bg-white dark:bg-gray-700 rounded-2xl overflow-hidden relative">
                <!-- Status Bar -->
                <div class="flex justify-between items-center p-3 bg-gray-100 dark:bg-gray-600">
                  <div class="flex items-center space-x-1">
                    <div class="w-1 h-1 bg-gray-400 rounded-full"></div>
                    <div class="w-1 h-1 bg-gray-400 rounded-full"></div>
                    <div class="w-1 h-1 bg-gray-400 rounded-full"></div>
                  </div>
                  <div class="text-xs font-semibold text-gray-600 dark:text-gray-300">9:41</div>
                  <div class="flex items-center space-x-1">
                    <div class="w-4 h-2 bg-gray-400 rounded-sm"></div>
                    <div class="w-6 h-3 bg-gray-400 rounded-sm"></div>
                  </div>
                </div>
                
                <!-- Chat Messages -->
                <div class="p-4 space-y-4">
                  <!-- Incoming Message -->
                  <div class="flex justify-start animate-fade-in-up" style="animation-delay: 1s;">
                    <div class="bg-gray-200 dark:bg-gray-600 rounded-2xl rounded-bl-md p-3 max-w-xs">
                      <p class="text-sm text-gray-800 dark:text-gray-200">你好！很高兴认识你</p>
                      <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">2:30 PM</p>
                    </div>
                  </div>
                  
                  <!-- Outgoing Message -->
                  <div class="flex justify-end animate-fade-in-up" style="animation-delay: 1.5s;">
                    <div class="bg-blue-500 rounded-2xl rounded-br-md p-3 max-w-xs">
                      <p class="text-sm text-white">Hello! Nice to meet you too</p>
                      <p class="text-xs text-blue-100 mt-1">2:31 PM</p>
                    </div>
                  </div>
                  
                  <!-- Translation Indicator -->
                  <div class="flex justify-center animate-scale-in" style="animation-delay: 2s;">
                    <div class="bg-green-100 dark:bg-green-900 rounded-full px-3 py-1 flex items-center space-x-2">
                      <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
                      </svg>
                      <span class="text-xs text-green-600 dark:text-green-400 font-medium">Auto-translated</span>
                    </div>
                  </div>
                  
                  <!-- Typing Indicator -->
                  <div class="flex justify-start animate-fade-in-up" style="animation-delay: 2.5s;">
                    <div class="bg-gray-200 dark:bg-gray-600 rounded-2xl rounded-bl-md p-3">
                      <div class="flex space-x-1">
                        <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.1s;"></div>
                        <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s;"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Floating Elements -->
              <div class="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-pulse-glow">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              
              <div class="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center animate-float">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Feature Description -->
        <div class="animate-fade-in-right">
          <div class="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6 animate-bounce-slow">
            <svg class="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {{ t('features.chat.title') }}
          </h3>
          <p class="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
            {{ t('features.chat.description') }}
          </p>
          
          <!-- Feature List -->
          <div class="space-y-3">
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span class="text-gray-700 dark:text-gray-300">Real-time messaging</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse" style="animation-delay: 0.2s;"></div>
              <span class="text-gray-700 dark:text-gray-300">Auto-translation</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style="animation-delay: 0.4s;"></div>
              <span class="text-gray-700 dark:text-gray-300">Smart notifications</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style="animation-delay: 0.6s;"></div>
              <span class="text-gray-700 dark:text-gray-300">Group conversations</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Translation Feature -->
      <div class="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Feature Description -->
        <div class="animate-fade-in-left">
          <div class="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6 animate-bounce-slow">
            <svg class="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {{ t('features.translation.title') }}
          </h3>
          <p class="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
            {{ t('features.translation.description') }}
          </p>
          
          <!-- Translation Demo -->
          <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
            <div class="flex items-center space-x-4 mb-4">
              <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span class="text-white text-sm font-bold">A</span>
              </div>
              <span class="text-gray-600 dark:text-gray-300">English</span>
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
              <div class="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <span class="text-white text-sm font-bold">中</span>
              </div>
              <span class="text-gray-600 dark:text-gray-300">中文</span>
            </div>
            
            <div class="space-y-3">
              <div class="bg-white dark:bg-gray-700 rounded-lg p-3 border-l-4 border-blue-500">
                <p class="text-sm text-gray-800 dark:text-gray-200">Hello, how are you?</p>
              </div>
              <div class="bg-white dark:bg-gray-700 rounded-lg p-3 border-l-4 border-red-500">
                <p class="text-sm text-gray-800 dark:text-gray-200">你好，你好吗？</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Translation Animation -->
        <div class="animate-fade-in-right">
          <div class="relative">
            <!-- Translation Interface Mockup -->
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6">
              <div class="flex items-center justify-between mb-6">
                <h4 class="text-lg font-semibold text-gray-900 dark:text-white">Live Translation</h4>
                <div class="flex items-center space-x-2">
                  <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span class="text-sm text-gray-600 dark:text-gray-300">Active</span>
                </div>
              </div>
              
              <!-- Language Selector -->
              <div class="flex items-center space-x-4 mb-6">
                <select class="bg-gray-100 dark:bg-gray-700 rounded-lg px-3 py-2 text-sm">
                  <option>English</option>
                  <option>中文</option>
                  <option>Español</option>
                </select>
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                </svg>
                <select class="bg-gray-100 dark:bg-gray-700 rounded-lg px-3 py-2 text-sm">
                  <option>中文</option>
                  <option>English</option>
                  <option>Français</option>
                </select>
              </div>
              
              <!-- Translation Text -->
              <div class="space-y-4">
                <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                  <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">Original:</p>
                  <p class="text-gray-900 dark:text-white">Good morning! How can I help you today?</p>
                </div>
                
                <div class="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 animate-fade-in-up" style="animation-delay: 1s;">
                  <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">Translation:</p>
                  <p class="text-gray-900 dark:text-white">早上好！我今天能为您做些什么？</p>
                </div>
              </div>
              
              <!-- Confidence Score -->
              <div class="mt-6 flex items-center justify-between">
                <span class="text-sm text-gray-600 dark:text-gray-300">Confidence:</span>
                <div class="flex items-center space-x-2">
                  <div class="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div class="h-full bg-green-500 rounded-full animate-pulse-glow" style="width: 95%"></div>
                  </div>
                  <span class="text-sm font-semibold text-green-600 dark:text-green-400">95%</span>
                </div>
              </div>
            </div>
            
            <!-- Floating Translation Icons -->
            <div class="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-float">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
              </svg>
            </div>
            
            <div class="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center animate-bounce-slow">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n()
</script>
