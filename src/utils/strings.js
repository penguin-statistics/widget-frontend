import i18n from '@/i18n'

function getLocaleMessage (object, localeKey, key, language) {
  return object[localeKey][language] || object[localeKey][i18n.fallbackLocale] || object[key] || ''
}

export default {
  translate (object, key) {
    const locale = i18n.locale
    const localeKey = `${key}_i18n`
    if (object) {
      if (object[localeKey]) {
        if (object[localeKey][locale]) {
          return getLocaleMessage(object, localeKey, key, locale)
        } else {
          const languages = locale.split('-')
          return getLocaleMessage(object, localeKey, key, languages[0])
        }
      } else {
        return object[key] || ''
      }
    } else {
      return ''
    }
  }
}
