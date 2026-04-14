<script setup lang="ts">
import Header from '~/components/layout/Header.vue'
import Footer from '~/components/layout/Footer.vue'
import CookieBanner from '~/components/common/CookieBanner.vue'

const { locale } = useAppI18n()

useHead({
  htmlAttrs: {
    lang: locale
  }
})
</script>

<template>
  <div style="display: flex; flex-direction: column; min-height: 100vh;">
    <Header />
    <main style="flex: 1;">
      <NuxtPage />
    </main>
    <Footer />
    <CookieBanner />
  </div>
</template>
