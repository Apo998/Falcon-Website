<script setup lang="ts">
const { t } = useAppI18n()
</script>

<template>
  <section class="hero">
    <div class="hero-content">
      <h1>Ihre Sicherheit ist unsere <span>Verantwortung</span></h1>
      <p>{{ t('home.heroSubtitle') }}</p>
      <NuxtLink to="/contact" class="cta-button">
        {{ t('home.contactBtn') }}
      </NuxtLink>
    </div>
  </section>
</template>
