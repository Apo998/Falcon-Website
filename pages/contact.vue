<script setup lang="ts">
const { t } = useAppI18n()
const config = useRuntimeConfig()

useSeoMetaData({
  title: 'Kontakt',
  description:
    'Kontaktieren Sie Falcon Security für ein unverbindliches Angebot. Ihr zuverlässiger Sicherheitsdienst in Köln und NRW.',
  keywords:
    'Falcon Security Kontakt, Sicherheitsdienst Köln Kontakt, Angebot Security',
  canonical: 'https://falcon-koeln.de/contact'
})

type Status = {
  type: '' | 'success' | 'error'
  message: string
}

type ContactForm = {
  name: string
  email: string
  phone: string
  message: string
}

type EmailTemplateParams = Record<string, string>

const isSubmitting = ref(false)
const status = ref<Status>({ type: '', message: '' })
const formData = reactive({
  name: '',
  email: '',
  phone: '',
  message: ''
} satisfies ContactForm)

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement | HTMLTextAreaElement
  const { name, value } = target
  formData[name] = value
}

const sendEmail = async (
  serviceId: string,
  templateId: string,
  publicKey: string,
  templateParams: EmailTemplateParams
) => {
  const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: templateParams
    })
  })

  if (!response.ok) {
    const errorData = await response.text()
    throw new Error(`EmailJS error: ${errorData}`)
  }

  return response
}

const handleSubmit = async (event: Event) => {
  event.preventDefault()
  isSubmitting.value = true
  status.value = { type: '', message: '' }

  try {
    const serviceId = config.public.emailjsServiceId
    const publicKey = config.public.emailjsPublicKey
    const adminTemplateId = config.public.emailjsTemplateId
    const autoReplyTemplateId = config.public.emailjsAutoreplyTemplateId

    if (serviceId && publicKey) {
      const promises = []

      if (adminTemplateId) {
        promises.push(
          sendEmail(serviceId, adminTemplateId, publicKey, {
            from_name: formData.name,
            from_email: formData.email,
            reply_to: formData.email,
            phone: formData.phone,
            message: formData.message,
            to_name: 'Falcon Security'
          })
        )
      }

      if (autoReplyTemplateId) {
        promises.push(
          sendEmail(serviceId, autoReplyTemplateId, publicKey, {
            to_name: formData.name,
            to_email: formData.email,
            email: formData.email,
            reply_to: 'info@falcon-koeln.de'
          })
        )
      }

      await Promise.all(promises)
    }

    status.value = {
      type: 'success',
      message: t('contact.successMessage') || 'Message sent successfully!'
    }
    formData.name = ''
    formData.email = ''
    formData.phone = ''
    formData.message = ''
    setTimeout(() => {
      status.value = { type: '', message: '' }
    }, 5000)
  } catch (error) {
    console.error('Error submitting form:', error)
    const message = error instanceof Error ? error.message : ''
    status.value = {
      type: 'error',
      message: message || t('contact.errorMessage') || 'An error occurred.'
    }
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="contact-page">
    <h1>{{ t('contact.pageTitle') }}</h1>
    <p>{{ t('contact.subtitle') }}</p>

    <div
      v-if="status.message"
      :style="{
        padding: '1rem',
        borderRadius: '4px',
        marginBottom: '1rem',
        backgroundColor: status.type === 'error' ? 'rgba(255, 0, 0, 0.1)' : 'rgba(0, 255, 0, 0.1)',
        border: status.type === 'error' ? '1px solid rgba(255,50,50,0.5)' : '1px solid rgba(50,255,50,0.5)',
        color: status.type === 'error' ? '#ff6b6b' : '#4ade80'
      }"
    >
      {{ status.message }}
    </div>

    <form class="contact-form" @submit="handleSubmit">
      <div class="form-group">
        <label for="name">{{ t('contact.name') }}</label>
        <input id="name" type="text" name="name" :value="formData.name" required @input="handleChange">
      </div>
      <div class="form-group">
        <label for="email">{{ t('contact.email') }}</label>
        <input id="email" type="email" name="email" :value="formData.email" required @input="handleChange">
      </div>
      <div class="form-group">
        <label for="phone">{{ t('contact.phone') }}</label>
        <input id="phone" type="tel" name="phone" :value="formData.phone" @input="handleChange">
      </div>
      <div class="form-group">
        <label for="message">{{ t('contact.message') }}</label>
        <textarea id="message" name="message" :value="formData.message" required @input="handleChange"></textarea>
      </div>
      <button type="submit" class="submit-button" :disabled="isSubmitting">
        {{ isSubmitting ? t('contact.submitting') : t('contact.submit') }}
      </button>
    </form>
  </div>
</template>
