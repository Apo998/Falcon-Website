import { defineNuxtPlugin, useState } from '#app'
import { watch } from 'vue'

export default defineNuxtPlugin(() => {
  const locale = useState<'de' | 'en'>('locale', () => 'de')
  const savedLocale = localStorage.getItem('locale')

  if (savedLocale === 'de' || savedLocale === 'en') {
    locale.value = savedLocale
  }

  watch(
    locale,
    (value: 'de' | 'en') => {
      localStorage.setItem('locale', value)
    },
    { immediate: true }
  )
})
