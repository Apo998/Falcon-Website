<script setup lang="ts">
import { services } from '~/src/data/services'

const { t } = useAppI18n()

const serviceCards = computed(() =>
  services.filter((service) => service.id !== 'revierfahren')
)
</script>

<template>
  <section class="service-widgets-section" aria-label="Unsere Dienstleistungen Übersicht">
    <div class="services-title-container">
      <h2 class="services-title">{{ t('home.servicesTitle') }}</h2>
      <div class="animated-line"></div>
    </div>

    <div class="service-widgets-grid">
      <NuxtLink
        v-for="service in serviceCards"
        :key="service.id"
        :to="`/services/${service.id}`"
        class="service-widget"
        :aria-label="t(`services.${service.id}`)"
      >
        <img
          :src="service.img"
          :alt="t(`services.${service.id}`)"
          loading="lazy"
        >
        <div class="service-widget-overlay">
          <h3 class="service-widget-title" aria-hidden="true">{{ t(`services.${service.id}`) }}</h3>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>
