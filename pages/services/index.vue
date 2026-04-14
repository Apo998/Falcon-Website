<script setup lang="ts">
const { t } = useAppI18n()

useSeoMetaData({
  title: 'Unsere Leistungen',
  description:
    'Umfassende Sicherheitsdienstleistungen in Köln & NRW: Objektschutz, Veranstaltungsschutz, Baustellenbewachung, Personenschutz und Revierdienst.',
  keywords:
    'Objektschutz Köln, Baustellenbewachung NRW, Veranstaltungsschutz Köln, Personenschutz NRW, Revierdienst',
  canonical: 'https://falcon-koeln.de/services'
})

const styles = {
  page: {
    paddingTop: '80px'
  },
  hero: {
    backgroundColor: '#ffac2e',
    color: 'white',
    padding: '4rem 2rem',
    textAlign: 'center'
  },
  heroTitle: {
    fontSize: '3rem',
    marginBottom: '1rem'
  }
}
</script>

<template>
  <div :style="styles.page">
    <div :style="styles.hero">
      <h1 :style="styles.heroTitle">{{ t('header.services') }}</h1>
      <p>{{ t('home.heroSubtitle') }}</p>
    </div>
  </div>
</template>
