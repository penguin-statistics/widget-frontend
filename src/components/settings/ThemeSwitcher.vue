<template>
  <div class="d-flex flex-row flex-wrap align-center">
    <v-icon
      left
      small
    >
      {{ mdiInvertColors }}
    </v-icon>

    <v-divider
      vertical
      class="mr-2"
    />

    <span
      v-for="theme in themes"
      :key="theme"
      v-ripple
      class="caption px-2 py-1 cursor-pointer border-radius-1 settings-option"
      :class="{'primary--text font-weight-bold border-1 settings-option--active': theme === reversing}"
      @click="activeTheme = theme"
    >
      {{ $t('settings.theme.' + theme) }}
    </span>
  </div>
</template>

<script>
import { mdiInvertColors, mdiCheckCircle } from '@mdi/js'
import Theme from '@/mixins/Theme'

export default {
  name: 'ThemeSwitcher',
  mixins: [Theme],
  data () {
    return {
      themes: ['light', 'dark'],
      mdiInvertColors,
      mdiCheckCircle
    }
  },
  computed: {
    activeTheme: {
      get () {
        return this.$store.getters['settings/theme']
      },
      set (theme) {
        if (theme !== this.activeTheme) this.$store.commit('settings/changeTheme', theme)
      }
    },
    reversing () {
      return this.$vuetify.theme.dark ? 'dark' : 'light'
    }
  }
}
</script>

<style scoped>

</style>
