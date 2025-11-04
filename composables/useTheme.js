export const useTheme = () => {
  const isDark = ref(false)
  
  // Auto-detect system preference
  const prefersDark = usePreferredDark()
  
  // Initialize theme from localStorage or system preference
  onMounted(() => {
    const savedTheme = localStorage.getItem('chuanxin-theme')
    if (savedTheme) {
      isDark.value = savedTheme === 'dark'
    } else {
      isDark.value = prefersDark.value
    }
    updateTheme()
  })
  
  // Watch for system preference changes
  watch(prefersDark, (newValue) => {
    if (!localStorage.getItem('chuanxin-theme')) {
      isDark.value = newValue
      updateTheme()
    }
  })
  
  const toggleTheme = () => {
    isDark.value = !isDark.value
    updateTheme()
    localStorage.setItem('chuanxin-theme', isDark.value ? 'dark' : 'light')
  }
  
  const updateTheme = () => {
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
  
  return {
    isDark: readonly(isDark),
    toggleTheme
  }
}
