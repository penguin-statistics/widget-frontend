import environment from '@/utils/environment'
import Localization from '@/mixins/Localization'
import Theme from '@/mixins/Theme'

export default {
  mixins: [Localization, Theme],
  created () {
    const url = new URL(window.location.href)
    const prefillLanguage = url.searchParams.get('lang') || this.language

    if (prefillLanguage) {
      this.changeLocale(prefillLanguage, false)
    } else {
      this.changeLocale(environment.detectLanguage(), false)
    }

    const prefillTheme = url.searchParams.get('theme') || this.theme
    if (prefillTheme) {
      this.onThemeChange(prefillTheme)
    }
  }
}
