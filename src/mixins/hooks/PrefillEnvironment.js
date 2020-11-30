import environment from '@/utils/environment'
import Localization from '@/mixins/Localization'
import Theme from '@/mixins/Theme'
import i18n from '@/i18n'
import { bootstrap } from 'vue-gtag'

export default {
  mixins: [Localization, Theme],
  created () {
    // `lang` parameter
    const url = new URL(window.location.href)
    const prefillLanguage = url.searchParams.get('lang') || this.language
    const detectedLanguage = environment.detectLanguage()

    if (prefillLanguage && ['zh', 'en', 'ja', 'ko'].includes(prefillLanguage)) {
      this.changeLocale(prefillLanguage, false)
    } else if (detectedLanguage) {
      this.changeLocale(detectedLanguage, false)
    } else {
      this.changeLocale(i18n.fallbackLocale)
    }

    const prefillTheme = url.searchParams.get('theme') || this.theme
    if (prefillTheme) {
      this.onThemeChange(prefillTheme)
    }

    const prefillDNT = url.searchParams.get('dnt') === '1' || navigator.doNotTrack === '1'
    if (prefillDNT) {
      console.info('due to DNT settings, tracking has been disabled')
    } else {
      bootstrap()
        .then(() => {
          console.info('vue-gtag initialized')
        })
        .catch(() => {
          console.error('vue-gtag failed to initialize')
        })
    }
  }
}
