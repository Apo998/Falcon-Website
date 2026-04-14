import de from '~/src/locales/de.json'
import en from '~/src/locales/en.json'
import falconSecProTranslations from '~/src/locales/falconsecpro.json'

type Locale = 'de' | 'en'
type TranslationTree = Record<string, string | TranslationTree>
type FalconSecProTranslation = typeof falconSecProTranslations.de

const messages: Record<Locale, TranslationTree> = { de, en }

function getByPath(
  object: TranslationTree | FalconSecProTranslation | undefined,
  path: string
): unknown {
  return path
    .split('.')
    .reduce<unknown>((current, key) => (current as Record<string, unknown> | undefined)?.[key], object)
}

export function useAppI18n() {
  const locale = useState<Locale>('locale', () => 'de')

  const normalizedLocale = computed<Locale>(() =>
    locale.value?.startsWith('en') ? 'en' : 'de'
  )

  const setLocale = (value: Locale) => {
    locale.value = value
  }

  const t = (key: string): string => {
    const value = getByPath(messages[normalizedLocale.value], key)
    return typeof value === 'string' ? value : key
  }

  const falconSecPro = computed<FalconSecProTranslation>(
    () => falconSecProTranslations[normalizedLocale.value]
  )

  return {
    locale,
    normalizedLocale,
    setLocale,
    t,
    falconSecPro
  }
}
