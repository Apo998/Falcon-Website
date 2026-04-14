<script setup lang="ts">
import Hero from '~/components/home/Hero.vue'
import Philosophy from '~/components/home/Philosophy.vue'
import EmergencyBanner from '~/components/home/EmergencyBanner.vue'
import Clients from '~/components/home/Clients.vue'
import ServiceWidgets from '~/components/home/ServiceWidgets.vue'

useSeoMetaData({
  title: 'Falcon GmbH | Sicherheitsdienst und Dienstleistung in Köln und NRW',
  description:
    'Die Falcon GmbH steht für Sicherheit- und Dienstleistungen des einundzwanzigsten Jahrhunderts. Als modernes Sicherheitsunternehmen aus Köln verbinden wir erfahrenes Fachpersonal mit digitalen Kontrollsystemen, vernetzten Live-Schaltungen und präziser Einsatzplanung.',
  keywords:
    'Security Köln, Sicherheitsdienst Köln, Security NRW, Sicherheitsdienst NRW, Falcon Security, Objektschutz Köln, Baustellenbewachung Köln',
  canonical: 'https://falcon-koeln.de/'
})
</script>

<template>
  <Hero />
  <Philosophy />
  <EmergencyBanner />
  <Clients />
  <ServiceWidgets />
</template>
