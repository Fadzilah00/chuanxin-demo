export const useReactiveTranslations = () => {
  const { locale, currentTranslations } = useI18n()
  
  // Create a reactive translation function that automatically updates
  const t = computed(() => {
    return (key) => {
      const keys = key.split('.')
      let value = currentTranslations.value
      
      for (const k of keys) {
        value = value?.[k]
      }
      
      return value || key
    }
  })
  
  // Create reactive computed properties for common sections
  const translations = computed(() => {
    const translate = t.value
    
    return {
      nav: {
        home: translate('nav.home'),
        about: translate('nav.about'),
        contact: translate('nav.contact')
      },
      footer: {
        description: translate('footer.description'),
        quickLinks: translate('footer.quickLinks'),
        support: translate('footer.support'),
        copyright: translate('footer.copyright'),
        links: {
          privacyPolicy: translate('footer.links.privacyPolicy'),
          termsOfService: translate('footer.links.termsOfService'),
          helpCenter: translate('footer.links.helpCenter'),
          documentation: translate('footer.links.documentation'),
          apiReference: translate('footer.links.apiReference'),
          status: translate('footer.links.status')
        }
      },
      features: {
        title: translate('features.title'),
        subtitle: translate('features.subtitle'),
        chat: {
          title: translate('features.chat.title'),
          subtitle: translate('features.chat.subtitle'),
          description: translate('features.chat.description')
        },
        translation: {
          title: translate('features.translation.title'),
          subtitle: translate('features.translation.subtitle'),
          description: translate('features.translation.description')
        },
        connect: {
          title: translate('features.connect.title'),
          subtitle: translate('features.connect.subtitle'),
          description: translate('features.connect.description')
        },
        demo: {
          statusBar: translate('features.demo.statusBar'),
          incomingMessage: translate('features.demo.incomingMessage'),
          outgoingMessage: translate('features.demo.outgoingMessage'),
          autoTranslated: translate('features.demo.autoTranslated'),
          liveTranslation: translate('features.demo.liveTranslation'),
          active: translate('features.demo.active'),
          original: translate('features.demo.original'),
          translation: translate('features.demo.translation'),
          confidence: translate('features.demo.confidence')
        }
      },
      testimonials: {
        title: translate('testimonials.title'),
        subtitle: translate('testimonials.subtitle'),
        partners: {
          title: translate('testimonials.partners.title')
        }
      },
      stats: {
        users: translate('stats.users'),
        usersSubtitle: translate('stats.usersSubtitle'),
        languages: translate('stats.languages'),
        languagesSubtitle: translate('stats.languagesSubtitle'),
        uptime: translate('stats.uptime'),
        translations: translate('stats.translations'),
        translationsSubtitle: translate('stats.translationsSubtitle'),
        support: translate('stats.support'),
        supportSubtitle: translate('stats.supportSubtitle')
      }
    }
  })
  
  return {
    t: t.value,
    translations,
    locale: readonly(locale)
  }
}

