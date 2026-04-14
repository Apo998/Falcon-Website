<script setup lang="ts">
const { t } = useAppI18n()
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer" aria-label="Footer">
    <div class="footer-content">
      <div class="footer-contact">
        <h3>Falcon GmbH</h3>
        <address style="font-style: normal;">
          <p>Mathias-Brüggen-Straße 1<br>50827 Köln</p>
        </address>
        <a href="tel:+4922156035898" class="contact-link" aria-label="Telefon: +49 221 56035898">
          <span aria-hidden="true">☎</span> <span>+49 221 56035898</span>
        </a>
        <a href="tel:+4915206390306" class="contact-link" aria-label="Mobil: +49 152 06390306">
          <span aria-hidden="true">📱</span> <span>+49 152 06390306</span>
        </a>
      </div>

      <div class="footer-info">
        <nav class="footer-links" aria-label="Rechtliche Links">
          <NuxtLink to="/impressum" class="footer-link">{{ t('footer.impressum') }}</NuxtLink>
          <NuxtLink to="/datenschutz" class="footer-link">{{ t('footer.datenschutz') }}</NuxtLink>
          <NuxtLink to="/falconsecpro-support" class="footer-link">{{ t('footer.unsere_app') }}</NuxtLink>
        </nav>
        <p class="copyright">&copy; {{ currentYear }} Falcon GmbH. Alle Rechte vorbehalten.</p>
      </div>

      <div class="footer-designer">
        <div class="designer-group">
          <span>Designed by</span>
          <a href="https://www.asa-e-business.com" target="_blank" rel="noopener noreferrer" aria-label="Besuchen Sie ASA e-business">
            <img src="/asa-logo-final.png" alt="ASA e-business logo" class="footer-logo">
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
