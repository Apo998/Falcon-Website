<script setup lang="ts">
const { t } = useAppI18n()

const clients = [
  { id: 1, src: '/clients/client1.jpg', alt: 'Client 1' },
  { id: 2, src: '/clients/client2.png', alt: 'Client 2' },
  { id: 3, src: '/clients/client3.png', alt: 'Client 3' },
  { id: 4, src: '/clients/client4.png', alt: 'Client 4' },
  { id: 5, src: '/clients/client5.png', alt: 'Client 5' },
  { id: 6, src: '/clients/client6.png', alt: 'Client 6' },
  { id: 7, src: '/clients/client7.png', alt: 'Client 7' },
  { id: 8, src: '/clients/client8.png', alt: 'Client 8' },
  { id: 9, src: '/clients/client9.png', alt: 'Client 9' },
  { id: 10, src: '/clients/asa.png', alt: 'ASA e-business' },
  { id: 11, src: '/clients/solera.png', alt: 'Solera' },
  { id: 12, src: '/clients/Trinkgut_Logo.svg.png', alt: 'Trinkgut' },
  { id: 13, src: '/clients/client10.png', alt: 'Client 10' }
]
</script>

<template>
  <section id="clients" class="clients-section" aria-label="Unsere Kunden">
    <div class="clients-title-container">
      <h2 class="clients-title">{{ t('home.clientsTitle') || 'Unsere Kunden' }}</h2>
      <div class="animated-line"></div>
    </div>

    <div class="clients-grid">
      <img
        v-for="client in clients"
        :key="client.id"
        :src="client.src"
        :alt="client.alt"
        class="client-logo"
        loading="lazy"
      >
    </div>
  </section>
</template>
