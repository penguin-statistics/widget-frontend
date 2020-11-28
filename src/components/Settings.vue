<template>
  <div class="d-flex flex-column flex-sm-row justify-center justify-sm-space-around align-center">
    <LocaleSwitcher class="d-inline-flex mr-2 mb-1 mb-sm-0" />

    <ThemeSwitcher class="d-inline-flex" />
  </div>
</template>

<script>
import LocaleSwitcher from '@/components/settings/LocaleSwitcher'
import { mdiCog } from '@mdi/js'
import ThemeSwitcher from '@/components/settings/ThemeSwitcher'
export default {
  name: 'Settings',
  components: { ThemeSwitcher, LocaleSwitcher },
  data () {
    return {
      mdiCog,
      active: false
    }
  }
}
</script>

<style scoped>
.settings-panel {
  max-width: 350px;
}
</style>
