<script setup lang="ts">
import LanguageSwitcher from '~/components/LanguageSwitcher.vue'

const { t } = useAppI18n()
const route = useRoute()
const router = useRouter()

const isMenuOpen = ref(false)
const isServicesOpen = ref(false)

const closeMenu = () => {
  isMenuOpen.value = false
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const toggleServices = (event: MouseEvent) => {
  event.preventDefault()
  isServicesOpen.value = !isServicesOpen.value
}

const handleLogoClick = () => {
  closeMenu()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const handleClientsClick = async (event: MouseEvent) => {
  event.preventDefault()
  closeMenu()

  if (route.path !== '/') {
    await router.push('/')
  }

  setTimeout(() => {
    document.getElementById('clients')?.scrollIntoView({ behavior: 'smooth' })
  }, 100)
}
</script>

<template>
  <header class="header">
    <NuxtLink to="/" class="logo" @click="handleLogoClick">
      <img src="/logo.png" alt="Falcon GmbH Logo">
    </NuxtLink>

    <button
      class="mobile-menu-btn"
      :aria-label="isMenuOpen ? 'Menü schließen' : 'Menü öffnen'"
      :aria-expanded="isMenuOpen"
      @click="toggleMenu"
    >
      <span aria-hidden="true">{{ isMenuOpen ? '✕' : '☰' }}</span>
    </button>

    <nav aria-label="Hauptnavigation">
      <ul class="nav-list" :class="{ open: isMenuOpen }">
        <li class="emergency-btn-item">
          <a href="tel:+4915206390306" class="emergency-btn">
            <span>24/7 NOTRUF</span>
          </a>
        </li>
        <li>
          <NuxtLink to="/about" class="nav-link" @click="closeMenu">
            {{ t('header.about') }}
          </NuxtLink>
        </li>
        <li class="dropdown" :class="{ open: isServicesOpen }">
          <button
            class="nav-link"
            style="background: none; border: none; cursor: pointer; font: inherit; display: flex; align-items: center;"
            aria-haspopup="true"
            :aria-expanded="isServicesOpen"
            @click="toggleServices"
          >
            {{ t('header.services') }} <span style="margin-left: 0.3rem;">▾</span>
          </button>
          <div class="dropdown-menu">
            <NuxtLink to="/services/veranstaltungsschutz" class="dropdown-item" @click="closeMenu">{{ t('services.veranstaltungsschutz') }}</NuxtLink>
            <NuxtLink to="/services/kaufhausdetektive" class="dropdown-item" @click="closeMenu">{{ t('services.kaufhausdetektive') }}</NuxtLink>
            <NuxtLink to="/services/baustellenueberwachung" class="dropdown-item" @click="closeMenu">{{ t('services.baustellenueberwachung') }}</NuxtLink>
            <NuxtLink to="/services/zugangskontrollen" class="dropdown-item" @click="closeMenu">{{ t('services.zugangskontrollen') }}</NuxtLink>
            <NuxtLink to="/services/objektschutz" class="dropdown-item" @click="closeMenu">{{ t('services.objektschutz') }}</NuxtLink>
            <NuxtLink to="/services/revierfahren" class="dropdown-item" @click="closeMenu">{{ t('services.revierfahren') }}</NuxtLink>
            <NuxtLink to="/services/schutzdienst" class="dropdown-item" @click="closeMenu">{{ t('services.schutzdienst') }}</NuxtLink>
            <NuxtLink to="/services/personenschutz" class="dropdown-item" @click="closeMenu">{{ t('services.personenschutz') }}</NuxtLink>
            <NuxtLink to="/services/ausbildung" class="dropdown-item" @click="closeMenu">{{ t('services.ausbildung') }}</NuxtLink>
            <NuxtLink to="/services/andere" class="dropdown-item" @click="closeMenu">{{ t('services.andere') }}</NuxtLink>
          </div>
        </li>
        <li>
          <a href="/#clients" class="nav-link" @click="handleClientsClick">
            {{ t('header.clients') }}
          </a>
        </li>
        <li>
          <NuxtLink to="/contact" class="nav-link" @click="closeMenu">
            {{ t('header.contact') }}
          </NuxtLink>
        </li>
        <li class="language-switcher-item">
          <LanguageSwitcher />
        </li>
      </ul>
    </nav>
  </header>
</template>
