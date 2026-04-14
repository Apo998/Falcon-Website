<script setup lang="ts">
import AboutContent from '~/components/about/AboutContent.vue'
import Team from '~/components/about/Team.vue'

useSeoMetaData({
  title: 'Über uns',
  description:
    'Erfahren Sie mehr über Falcon Security. Seit über 5 Jahren Ihr zuverlässiger Partner für Sicherheit in ganz Nordrhein-Westfalen.',
  keywords:
    'Falcon Security Team, Über Falcon GmbH, Sicherheitsunternehmen Köln, Sicherheit NRW',
  canonical: 'https://falcon-koeln.de/about'
})
</script>

<template>
  <div class="about-page">
    <AboutContent />
    <Team />
  </div>
</template>
