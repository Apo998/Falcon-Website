<script setup lang="ts">
const { t } = useAppI18n()
const isVisible = ref(false)
const sectionRef = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | undefined

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
      }
    },
    { threshold: 0.2 }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

onBeforeUnmount(() => {
  if (observer && sectionRef.value) {
    observer.unobserve(sectionRef.value)
  }
})
</script>

<template>
  <section ref="sectionRef" class="philosophy">
    <div class="philosophy-container">
      <div class="philosophy-title-container">
        <h2 class="philosophy-title" :class="{ 'animate-in': isVisible }">
          {{ t('home.philosophy.title') }}
        </h2>
        <div class="animated-line"></div>
      </div>
      <div class="philosophy-content" :class="{ 'animate-in': isVisible }">
        <p class="philosophy-paragraph">
          {{ t('home.philosophy.p1') }}
        </p>
        <p class="philosophy-paragraph">
          {{ t('home.philosophy.p2') }}
        </p>
        <img
          src="/dekra-zertifikat.png"
          alt="Sicherungsdienstleistungen DIN 77200-1 Zertifikat"
          class="philosophy-certificate-image"
        >
      </div>
    </div>
  </section>
</template>
