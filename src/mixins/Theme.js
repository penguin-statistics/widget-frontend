import { mapGetters } from 'vuex'
import environment from '@/utils/environment'

export default {
  watch: {
    theme: ['onThemeChange']
  },
  computed: {
    ...mapGetters('settings', ['theme'])
  },
  methods: {
    themeToggle (isDark) {
      const windowsIndicator = environment.isWindows ? 'platform--windows' : 'platform--not-windows'
      console.log(isDark)
      this.$vuetify.theme.dark = isDark
      const cl = document.documentElement.classList
      cl.add(windowsIndicator)
      if (isDark) {
        cl.remove('vuetify-theme--light')
        cl.add('vuetify-theme--dark')
        document.body.style.backgroundColor = '#121212'
      } else {
        cl.remove('vuetify-theme--dark')
        cl.add('vuetify-theme--light')
        document.body.style.backgroundColor = '#ffffff'
      }
    },
    onThemeChange (newValue) {
      if (newValue === 'dark') {
        this.themeToggle(true)
      } else {
        this.themeToggle(false)
      }
    }
  }
}
