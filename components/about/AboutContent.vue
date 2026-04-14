<script setup lang="ts">
const { t } = useAppI18n()
</script>

<template>
  <div class="about-container">
    <header class="about-header">
      <h1>{{ t('about_page.title') }}</h1>
      <p class="subtitle">{{ t('about_page.subtitle') }}</p>
    </header>

    <div class="about-content">
      <div class="about-text">
        <p>{{ t('about_page.content.p1') }}</p>
        <p>{{ t('about_page.content.p2') }}</p>
        <p>{{ t('about_page.content.p3') }}</p>
        <p>{{ t('about_page.content.p4') }}</p>
      </div>
    </div>
  </div>
</template>
