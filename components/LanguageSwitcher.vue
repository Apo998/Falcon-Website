<script setup lang="ts">
const { normalizedLocale, setLocale } = useAppI18n()
</script>

<template>
  <div class="language-switcher">
    <button
      class="lang-btn"
      :class="{ active: normalizedLocale === 'de' }"
      aria-label="Switch to German"
      @click="setLocale('de')"
    >
      DE
    </button>
    <span class="separator">|</span>
    <button
      class="lang-btn"
      :class="{ active: normalizedLocale === 'en' }"
      aria-label="Switch to English"
      @click="setLocale('en')"
    >
      EN
    </button>
  </div>
</template>
