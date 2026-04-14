<script setup lang="ts">
const { t } = useAppI18n()
</script>

<template>
  <div class="legal-page">
    <h1>{{ t('legal.impressumTitle') }}</h1>
    <div class="legal-content" v-html="t('legal.impressumContent')"></div>
  </div>
</template>
