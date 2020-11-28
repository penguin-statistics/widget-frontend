<template>
  <div class="d-flex flex-row flex-wrap align-center">
    <v-icon
      left
      small
    >
      {{ mdiTranslate }}
    </v-icon>

    <v-divider
      vertical
      class="mr-2"
    />

    <span
      v-for="locale in localizations"
      :key="locale.value"
      v-ripple
      class="caption px-2 py-1 cursor-pointer border-radius-1 settings-option"
      :class="{'primary--text font-weight-bold border-1 settings-option--active': locale.value === activeLocale}"
      @click="activeLocale = locale.value"
    >
      {{ locale.text }}
    </span>
  </div>
</template>

<script>
import Localization from '@/mixins/Localization'
import { mdiTranslate } from '@mdi/js'

export default {
  name: 'LocaleSwitcher',
  mixins: [Localization],
  data () {
    return {
      localizations: [
        {
          value: 'zh',
          text: '简体中文'
        },
        {
          value: 'en',
          text: 'English'
        },
        {
          value: 'ja',
          text: '日本語'
        },
        {
          value: 'ko',
          text: '한국어'
        }
      ],
      mdiTranslate
    }
  },
  computed: {
    activeLocale: {
      get () {
        return this.$i18n.locale
      },
      set (localeId) {
        if (localeId !== this.activeLocale) this.changeLocale(localeId, true)
      }
    }
  }
}
</script>

<style scoped>

</style>
