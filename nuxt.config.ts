export default defineNuxtConfig({
  compatibilityDate: '2026-04-14',
  devtools: { enabled: false },
  css: [
    '~/src/index.css',
    '~/src/components/layout/Header.css',
    '~/src/components/layout/Footer.css',
    '~/src/components/LanguageSwitcher.css',
    '~/src/components/home/Hero.css',
    '~/src/components/home/Philosophy.css',
    '~/src/components/home/EmergencyBanner.css',
    '~/src/components/home/Clients.css',
    '~/src/components/home/ServiceWidgets.css',
    '~/src/pages/About.css',
    '~/src/pages/Contact.css',
    '~/src/pages/Legal.css',
    '~/src/components/about/Team.css',
    '~/src/pages/FalconSecPro.css',
    '~/src/components/common/CookieBanner.css'
  ],
  modules: [],
  runtimeConfig: {
    public: {
      emailjsServiceId: process.env.VITE_EMAILJS_SERVICE_ID || '',
      emailjsTemplateId: process.env.VITE_EMAILJS_TEMPLATE_ID || '',
      emailjsPublicKey: process.env.VITE_EMAILJS_PUBLIC_KEY || '',
      emailjsAutoreplyTemplateId: process.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID || ''
    }
  },
  app: {
    head: {
      title: 'Falcon GmbH',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  }
})
