<script setup lang="ts">
import { services, type Service } from '~/src/data/services'

const route = useRoute()
const { t } = useAppI18n()

const serviceId = computed(() => {
  const value = route.params.serviceId
  return Array.isArray(value) ? value[0] : value
})
const service = computed<Service | undefined>(() =>
  services.find((item) => item.id === serviceId.value)
)

if (!service.value) {
  await navigateTo('/services', { replace: true })
}

const serviceTitle = computed(() => t(`services.${serviceId.value}`))
const serviceDescription = computed(() =>
  t(`services.${serviceId.value}_desc`)
    .replace(/<[^>]*>?/gm, '')
    .substring(0, 160)
)

useSeoMetaData({
  title: serviceTitle.value,
  description: serviceDescription.value,
  keywords: `${serviceTitle.value}, Security Köln, Sicherheitsdienst NRW, Falcon Security`,
  canonical: `https://falcon-koeln.de/services/${serviceId.value}`
})

const styles = {
  pageWrapper: {
    backgroundColor: '#111',
    minHeight: '100vh',
    color: 'white'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem',
    fontFamily: 'sans-serif'
  },
  hero: {
    backgroundColor: '#ffac2e',
    color: 'white',
    padding: '3rem 2rem',
    textAlign: 'center',
    marginBottom: '2rem'
  },
  heroTitle: {
    fontSize: '2.2rem',
    margin: 0,
    fontWeight: '600'
  },
  contentContainer: {
    maxWidth: '800px',
    margin: '0 auto'
  },
  content: {
    lineHeight: '1.8',
    color: 'white',
    fontSize: '1.15rem'
  }
}
</script>

<template>
  <div :style="styles.pageWrapper">
    <div :style="styles.hero">
      <h1 :style="styles.heroTitle">{{ serviceTitle }}</h1>
    </div>

    <div :style="styles.container">
      <div :style="styles.contentContainer">
        <div :style="styles.content">
          <div v-html="t(`services.${serviceId}_desc`)"></div>
        </div>
      </div>
    </div>
  </div>
</template>
