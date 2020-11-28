import dayjs from 'dayjs'
import { mapGetters } from 'vuex'

export default {
  methods: {
    changeLocale (localeId, save = true) {
      dayjs.locale(localeId)
      if (save) this.$store.commit('settings/changeLanguage', localeId)
      this.$i18n.locale = localeId
    }
  },
  computed: {
    ...mapGetters('settings', ['language'])
  }
}
