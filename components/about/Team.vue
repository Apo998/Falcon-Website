<script setup lang="ts">
const { t } = useAppI18n()

const teamMembers = [
  { name: 'Sami Sahin', roleKey: 'ceo' },
  { name: 'Ekrem Sahin', roleKey: 'operations_manager' },
  { name: 'Aycan Kocaoglu', roleKey: 'sales' },
  { name: 'Yusuf Gönen', roleKey: 'sales' },
  { name: 'Abdullah Adaileh', roleKey: 'technician' },
  { name: 'Yasin Aras', roleKey: 'area_manager' },
  { name: 'Taha Aras', roleKey: 'area_manager' },
  { name: 'Baris Caglar', roleKey: 'area_manager' }
]
</script>

<template>
  <section class="team-section">
    <h2>{{ t('about_page.team.title') }}</h2>
    <div class="team-grid">
      <div v-for="(member, index) in teamMembers" :key="index" class="team-card">
        <div class="image-placeholder">
          <span aria-hidden="true" style="font-size: 64px; color: #e09a26;">👤</span>
        </div>
        <div class="team-info">
          <h3>{{ member.name }}</h3>
          <p>{{ t(`about_page.team.roles.${member.roleKey}`) }}</p>
        </div>
      </div>
    </div>

    <div class="certificates-section">
      <h2>Zertifikate</h2>
      <img
        src="/dekra-zertifikat.png"
        alt="Sicherungsdienstleistungen DIN 77200-1 Zertifikat"
        class="certificate-image"
      >
    </div>
  </section>
</template>
