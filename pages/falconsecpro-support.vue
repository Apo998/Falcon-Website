<script setup lang="ts">
const { falconSecPro } = useAppI18n()
const openFaq = ref<number | null>(null)

const pageText = computed(() => falconSecPro.value)
const faqData = computed(() =>
  Object.values(pageText.value.faq).filter((item) => typeof item === 'object')
)

const toggleFaq = (index: number) => {
  openFaq.value = openFaq.value === index ? null : index
}
</script>

<template>
  <div class="support-page">
    <section class="support-hero">
      <div style="max-width: 800px; margin: 0 auto;">
        <img
          src="/falcon-secpro-logo.png"
          alt="Falcon SecPro Logo"
          style="width: 120px; height: 120px; border-radius: 24px; margin: 0 auto 32px; box-shadow: 0 20px 40px rgba(0,0,0,0.5);"
        >
        <h1>{{ pageText.hero.title }}</h1>
        <h2 style="font-size: 1.5rem; font-weight: 500; margin-bottom: 24px; color: #eee;">{{ pageText.hero.subtitle }}</h2>
        <div
          style="display: inline-block; padding: 8px 16px; background-color: rgba(255, 172, 46, 0.1); border: 1px solid rgba(255, 172, 46, 0.2); border-radius: 100px; margin-bottom: 24px; color: #ffac2e; font-size: 0.9rem; font-weight: 500;"
        >
          {{ pageText.hero.internalNotice }}
        </div>

        <p style="color: #888; margin-bottom: 40px; text-align: center; font-size: 1.1rem; line-height: 1.6;">{{ pageText.hero.description }}</p>
      </div>
    </section>

    <nav class="support-nav">
      <a href="#contact">Support</a>
      <a href="#faq">FAQ</a>
      <a href="#checklist">Checkliste</a>
      <a href="#privacy">Datenschutz</a>
    </nav>

    <div class="support-container">
      <section id="contact" style="margin-bottom: 80px; scroll-margin-top: 100px;">
        <h2 style="margin-bottom: 40px; font-size: 2rem;">{{ pageText.contact.title }}</h2>
        <div class="support-grid">
          <div class="support-card">
            <span style="margin-bottom: 20px; font-size: 32px; color: #ffac2e;" aria-hidden="true">✉</span>
            <h3 style="margin-bottom: 12px;">E-Mail Support</h3>
            <p style="margin-bottom: 20px; color: #eee; text-align: center;">{{ pageText.contact.email }}</p>
            <a :href="`mailto:${pageText.contact.email}`" style="color: #ffac2e; font-weight: bold; display: flex; align-items: center; justify-content: center; gap: 8px; text-decoration: none;">
              Nachricht schreiben <span aria-hidden="true">→</span>
            </a>
          </div>
          <div class="support-card">
            <span style="margin-bottom: 20px; font-size: 32px; color: #ffac2e;" aria-hidden="true">●</span>
            <h3 style="margin-bottom: 12px;">System Status</h3>
            <p style="margin-bottom: 20px; color: #eee; text-align: center;">Alle Systeme operativ.</p>
            <span style="color: #4CAF50; font-weight: bold; display: flex; align-items: center; justify-content: center; gap: 8px;">
              <span style="width: 8px; height: 8px; border-radius: 50%; background-color: #4CAF50;"></span>
              {{ pageText.contact.status }}
            </span>
          </div>
        </div>
        <div style="margin-top: 24px; background-color: rgba(255, 172, 46, 0.05); padding: 24px; border-radius: 16px; border: 1px solid rgba(255, 172, 46, 0.2); display: flex; flex-direction: column; align-items: center; text-align: center;">
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
            <span aria-hidden="true" style="font-size: 28px; color: #ffac2e;">⚠</span>
            <h4 style="color: #ffac2e; margin: 0; font-size: 1.1rem;">{{ pageText.contact.emergencyTitle }}</h4>
          </div>
          <p style="margin: 0; color: #aaa; font-size: 0.95rem; text-align: center;">{{ pageText.contact.emergencyText }}</p>
        </div>
      </section>

      <section id="faq" style="margin-bottom: 80px; scroll-margin-top: 100px;">
        <h2 style="margin-bottom: 40px; font-size: 2rem;">{{ pageText.faq.title }}</h2>
        <div class="support-faq-container">
          <div
            v-for="(item, index) in faqData"
            :key="index"
            :style="{ borderBottom: index === faqData.length - 1 ? 'none' : '1px solid #333' }"
          >
            <button
              :style="{
                width: '100%',
                padding: '24px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: 'white',
                backgroundColor: openFaq === index ? '#252525' : 'transparent',
                textAlign: 'left',
                border: 'none',
                outline: 'none',
                cursor: 'pointer'
              }"
              @click="toggleFaq(index)"
            >
              <span style="font-weight: 500;">{{ item.q }}</span>
              <span aria-hidden="true" :style="{ color: openFaq === index ? '#ffac2e' : '#666' }">{{ openFaq === index ? '▴' : '▾' }}</span>
            </button>
            <div v-if="openFaq === index" style="padding: 0 24px 24px; background-color: #252525; color: #aaa;">
              <p style="margin: 0; line-height: 1.6; text-align: left;">{{ item.a }}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="checklist" style="margin-bottom: 80px; scroll-margin-top: 100px;">
        <h2 style="margin-bottom: 40px; font-size: 2rem;">{{ pageText.checks.title }}</h2>
        <div class="checklist-grid">
          <div
            v-for="(step, idx) in [pageText.checks.step1, pageText.checks.step2, pageText.checks.step3, pageText.checks.step4]"
            :key="idx"
            style="display: flex; align-items: center; gap: 16px; background-color: #1e1e1e; padding: 20px; border-radius: 12px; border: 1px solid #333;"
          >
            <span aria-hidden="true" style="color: #ffac2e;">✓</span>
            <span style="color: #eee;">{{ step }}</span>
          </div>
        </div>
      </section>

      <section id="privacy" class="privacy-section-box">
        <span aria-hidden="true" style="display: block; margin: 0 auto 24px; font-size: 48px; color: #ffac2e;">🔒</span>
        <h2 style="margin-bottom: 20px; font-size: 1.8rem;">{{ pageText.privacy.title }}</h2>
        <p style="color: #aaa; margin-bottom: 32px; line-height: 1.6; text-align: center;">{{ pageText.privacy.text }}</p>

        <div style="margin-top: 30px; margin-bottom: 32px; padding: 20px; background-color: rgba(255, 172, 46, 0.05); border-radius: 12px; text-align: left; border: 1px solid rgba(255, 172, 46, 0.2);">
          <p style="color: #ffac2e; font-size: 0.9rem; margin: 0; line-height: 1.5; text-align: left;">
            <strong>{{ pageText.privacy.dataPoints }}</strong>
          </p>
        </div>

        <div style="display: flex; justify-content: center; gap: 30px; flex-wrap: wrap;">
          <NuxtLink to="/falconsecpro-privacy" style="color: #ffac2e; font-weight: bold; text-decoration: underline;">
            {{ pageText.privacy.links.privacy }}
          </NuxtLink>
        </div>
      </section>

      <section style="margin-top: 80px; padding: 40px 0; border-top: 1px solid #222; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 12px;">
        <span aria-hidden="true" style="color: #444;">📱</span>
        <p style="color: #555; font-size: 0.85rem; margin: 0; letter-spacing: 0.5px;">
          {{ pageText.techInfo.version }} | {{ pageText.techInfo.update }}
        </p>
      </section>
    </div>
  </div>
</template>
