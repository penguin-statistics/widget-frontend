import i18n from '@/i18n'

function getFirstBrowserLanguageWithRegionCode () {
  const nav = window.navigator
  const browserLanguagePropertyKeys = ['language', 'browserLanguage', 'systemLanguage', 'userLanguage']
  let i
  let language
  let len
  let shortLanguage = null

  // support for HTML 5.1 "navigator.languages"
  if (Array.isArray(nav.languages)) {
    for (i = 0; i < nav.languages.length; i++) {
      language = nav.languages[i]
      len = language.length
      if (!shortLanguage && len) {
        shortLanguage = language
      }
      if (language && len > 2) {
        return language
      }
    }
  }

  // support for other well known properties in browsers
  for (i = 0; i < browserLanguagePropertyKeys.length; i++) {
    language = nav[browserLanguagePropertyKeys[i]]
    // skip this loop iteration if property is null/undefined.  IE11 fix.
    if (language == null) { continue }
    len = language.length
    if (!shortLanguage && len) {
      shortLanguage = language
    }
    if (language && len > 2) {
      return language
    }
  }

  return shortLanguage
}

function detectLanguage () {
  const language = getFirstBrowserLanguageWithRegionCode().replace('_', '-')
  if (!language) return i18n.fallbackLocale // use default
  return language.split('-')[0]
}

export default {
  detectLanguage
}
