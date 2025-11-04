export const useLanguageSwitch = () => {
  const { locale, setLocale } = useI18n()
  
  // Instant language switching - no delays, no events
  const switchLanguage = (newLocale) => {
    setLocale(newLocale)
  }
  
  return {
    switchLanguage,
    locale: readonly(locale)
  }
}
