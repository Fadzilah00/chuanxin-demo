export default defineNuxtPlugin(() => {
  // Simple i18n initialization - no complex event handling needed
  const { locale } = useI18n()
  
  // Initialize locale from localStorage on client side
  if (typeof window !== 'undefined') {
    const savedLocale = localStorage.getItem('chuanxin-locale')
    if (savedLocale && savedLocale !== locale.value) {
      locale.value = savedLocale
    }
  }
})
