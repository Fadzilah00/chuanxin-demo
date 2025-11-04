export const useSmoothI18n = () => {
  const { t, locale, setLocale } = useI18n()
  
  // Force reactivity trigger
  const forceUpdate = ref(0)
  
  // Enhanced translation function with forced reactivity
  const smoothT = computed(() => {
    forceUpdate.value // Force reactivity
    return (key) => {
      return t(key)
    }
  })
  
  // Enhanced language switching with immediate reactivity
  const smoothSwitchLanguage = (newLocale) => {
    setLocale(newLocale)
    
    // Force immediate update
    nextTick(() => {
      forceUpdate.value++
      
      // Dispatch events for comprehensive reactivity
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('smooth-locale-change', {
          detail: { locale: newLocale }
        }))
      }
    })
  }
  
  // Listen for external locale changes
  onMounted(() => {
    const handleLocaleChange = () => {
      forceUpdate.value++
    }
    
    if (typeof window !== 'undefined') {
      window.addEventListener('locale-changed', handleLocaleChange)
      window.addEventListener('locale-updated', handleLocaleChange)
      window.addEventListener('language-switched', handleLocaleChange)
      window.addEventListener('smooth-locale-change', handleLocaleChange)
    }
    
    onUnmounted(() => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('locale-changed', handleLocaleChange)
        window.removeEventListener('locale-updated', handleLocaleChange)
        window.removeEventListener('language-switched', handleLocaleChange)
        window.removeEventListener('smooth-locale-change', handleLocaleChange)
      }
    })
  })
  
  return {
    t: smoothT.value,
    locale: readonly(locale),
    setLocale: smoothSwitchLanguage,
    forceUpdate
  }
}
