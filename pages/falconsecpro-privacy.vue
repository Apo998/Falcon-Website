<script setup lang="ts">
const { normalizedLocale, falconSecPro } = useAppI18n()

const text = computed(() => falconSecPro.value.privacy.full_policy_raw)
</script>

<template>
  <div style="background-color: #121212; min-height: 100vh; color: #fff;">
    <div class="privacy-page-container">
      <NuxtLink
        to="/falconsecpro-support"
        style="display: flex; align-items: center; gap: 8px; color: #ffac2e; margin-bottom: 40px; font-weight: bold; text-decoration: none;"
      >
        <span aria-hidden="true">←</span> Back to Support
      </NuxtLink>

      <header style="margin-bottom: 40px; text-align: center;">
        <div style="background-color: rgba(255, 172, 46, 0.1); width: 64px; height: 64px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px;">
          <span aria-hidden="true" style="font-size: 32px; color: #ffac2e;">🛡</span>
        </div>
        <h1 style="font-size: 2.5rem; margin-bottom: 8px; color: #ffac2e;">
          {{ normalizedLocale === 'de' ? 'Datenschutzerklärung (App)' : 'Privacy Policy (App)' }}
        </h1>
      </header>

      <section class="privacy-content-box">
        {{ text }}
      </section>
    </div>
  </div>
</template>
