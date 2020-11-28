<template>
  <div class="d-flex flex-column">
    <span
      v-if="zoneType"
      class="overline"
      style="line-height: 1rem; opacity: 0.6"
    >
      {{ zoneType }}
    </span>
    <span class="subtitle-2">
      {{ zoneName }}
    </span>
  </div>
</template>

<script>
import strings from '@/utils/strings'

export default {
  name: 'ZoneName',
  props: {
    zone: {
      type: Object,
      required: true
    }
  },
  computed: {
    zoneName () {
      return strings.translate(this.zone, 'zoneName')
    },
    zoneType () {
      if (this.zone.zoneId === 'gachabox') return null
      return this.$t('zone.types.' + this.zone.type)
    }
  }
}
</script>

<style scoped>

</style>
