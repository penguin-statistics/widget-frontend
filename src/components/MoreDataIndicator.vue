<template>
  <div
    class="d-flex justify-center my-2 hidden-md-and-up"
  >
    <v-chip
      label
      class="d-flex align-center flex-row caption text--text"
    >
      <v-icon
        :size="20"
        color="text"
        class="mr-1"
      >
        {{ mdiChevronDoubleLeft }}
      </v-icon>

      <span class="text--text">{{ $t('table.scroll') }}</span>

      <v-icon
        :size="20"
        color="text"
        class="ml-1"
      >
        {{ mdiChevronDoubleRight }}
      </v-icon>
    </v-chip>
  </div>
</template>

<script>
import { mdiChevronDoubleLeft, mdiChevronDoubleRight } from '@mdi/js'
export default {
  name: 'MoreDataIndicator',
  data () {
    return {
      mdiChevronDoubleLeft,
      mdiChevronDoubleRight
    }
  }
}
</script>

<style scoped>

</style>
