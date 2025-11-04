// Simple, instant i18n system
const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      contact: 'Contact',
      language: {
        select: 'Select Language'
      }
    },
    hero: {
      tagline: "China's QQLink – Chat & Translate made simple",
      cta: 'Open App',
      ctaSecondary: 'Get Started',
      features: {
        chat: 'Chat',
        translate: 'Translate',
        connect: 'Connect'
      }
    },
    features: {
      title: 'Powerful Features',
      subtitle: 'Experience seamless communication with our advanced chat and translation technology',
      chat: {
        title: 'Smart Chat',
        subtitle: 'Instant messaging with intelligent features',
        description: 'Connect with people instantly using our intelligent chat system. Real-time messaging with advanced features and seamless user experience.'
      },
      translation: {
        title: 'AI Translation',
        subtitle: 'Real-time language translation powered by AI',
        description: 'Break language barriers with our advanced AI-powered translation. Accurate, fast, and context-aware translations in real-time.'
      }
    },
    footer: {
      description: 'China\'s QQLink – Chat & Translate made simple. Connect with people across language barriers with our innovative platform.',
      quickLinks: 'Quick Links',
      support: 'Support',
      copyright: 'All rights reserved.',
      links: {
        privacyPolicy: 'Privacy Policy',
        termsOfService: 'Terms of Service',
        helpCenter: 'Help Center',
        documentation: 'Documentation',
        apiReference: 'API Reference',
        status: 'Status'
      }
    }
  },
  zh: {
    nav: {
      home: '首页',
      about: '关于我们',
      contact: '联系我们',
      language: {
        select: '选择语言'
      }
    },
    hero: {
      tagline: '中国的QQ链接 – 聊天和翻译变得简单',
      cta: '打开应用',
      ctaSecondary: '立即体验',
      features: {
        chat: '聊天',
        translate: '翻译',
        connect: '连接'
      }
    },
    features: {
      title: '强大功能',
      subtitle: '通过我们先进的聊天和翻译技术体验无缝沟通',
      chat: {
        title: '智能聊天',
        subtitle: '具有智能功能的即时消息传递',
        description: '使用我们的智能聊天系统即时与人联系。具有高级功能和无缝用户体验的实时消息传递。'
      },
      translation: {
        title: 'AI翻译',
        subtitle: 'AI驱动的实时语言翻译',
        description: '通过我们先进的AI驱动翻译打破语言障碍。准确、快速、上下文感知的实时翻译。'
      }
    },
    footer: {
      description: '中国的QQ链接 – 聊天和翻译变得简单。通过我们的创新平台与跨语言障碍的人们联系。',
      quickLinks: '快速链接',
      support: '支持',
      copyright: '版权所有。',
      links: {
        privacyPolicy: '隐私政策',
        termsOfService: '服务条款',
        helpCenter: '帮助中心',
        documentation: '文档',
        apiReference: 'API参考',
        status: '状态'
      }
    }
  }
}

// Global reactive locale - this will update instantly across all components
const currentLocale = ref('en')

// Initialize from localStorage
if (typeof window !== 'undefined') {
  const saved = localStorage.getItem('chuanxin-locale')
  if (saved && translations[saved]) {
    currentLocale.value = saved
  }
}

export const useInstantI18n = () => {
  // Instant translation function
  const t = (key) => {
    const keys = key.split('.')
    let value = translations[currentLocale.value]
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    return value || key
  }
  
  // Instant language switching
  const setLocale = (newLocale) => {
    if (translations[newLocale] && currentLocale.value !== newLocale) {
      currentLocale.value = newLocale
      
      // Save to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('chuanxin-locale', newLocale)
      }
    }
  }
  
  return {
    t,
    locale: currentLocale,
    setLocale,
    availableLocales: Object.keys(translations)
  }
}
