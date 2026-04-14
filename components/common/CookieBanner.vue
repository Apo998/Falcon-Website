<script setup lang="ts">
const { t } = useAppI18n()

type CookieConsent = 'accepted' | 'declined'

const isVisible = ref(false)

onMounted(() => {
  const storedConsent = localStorage.getItem('cookie-consent')
  isVisible.value = storedConsent !== 'accepted' && storedConsent !== 'declined'
})

const setConsent = (value: CookieConsent) => {
  localStorage.setItem('cookie-consent', value)
  isVisible.value = false
}
</script>

<template>
  <Transition name="cookie-banner">
    <div v-if="isVisible" class="cookie-banner" role="dialog" aria-live="polite" aria-label="Cookie banner">
      <div class="cookie-banner__content">
        <div class="cookie-banner__text">
          <strong class="cookie-banner__title">{{ t('cookieBanner.title') }}</strong>
          <p>{{ t('cookieBanner.description') }}</p>
        </div>

        <div class="cookie-banner__actions">
          <NuxtLink to="/datenschutz" class="cookie-banner__link">
            {{ t('cookieBanner.learnMore') }}
          </NuxtLink>
          <button class="cookie-banner__button cookie-banner__button--secondary" @click="setConsent('declined')">
            {{ t('cookieBanner.decline') }}
          </button>
          <button class="cookie-banner__button cookie-banner__button--primary" @click="setConsent('accepted')">
            {{ t('cookieBanner.accept') }}
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>
