<template>
  <div
    class="fill-height full-width text-center justify-center align-center d-flex flex-column"
    penguin:datatable="error"
    style="z-index: 0"
  >
    <v-sheet
      dark
      color="background"
      class="d-flex flex-column align-center justify-center py-6 px-4 full-width error-box position-relative"
      style="max-width: 600px"
      rounded
    >
      <div
        class="d-flex flex-column align-center justify-center"
        style="z-index: 1"
      >
        <span class="grey--text text--darken-3 caption">
          {{ $t('errors._sorry') }}
        </span>
        <span class="subtitle-1">
          {{ $t('errors._prefix') }}
        </span>
        <span class="d-flex align-center mt-2 caption text-left">
          <v-icon
            small
            class="mr-1"
          >
            {{ mdiAlertCircle }}
          </v-icon>
          {{ $t('errors._reason', {error: errorMessage}) }}
        </span>
        <span class="grey--text text--darken-3 caption mt-0">
          {{ $t('errors._reported') }}
        </span>
      </div>
    </v-sheet>
  </div>
</template>

<script>
import { mdiAlertCircle } from '@mdi/js'
export default {
  name: 'DataTableError',
  props: {
    errors: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      mdiAlertCircle
    }
  },
  computed: {
    errorMessage () {
      const messages = []
      for (const error of this.errors) {
        messages.push(this.$t('errors.' + error.type, error))
      }
      return messages.join(this.$t('meta.separator'))
    }
  }
}
</script>

<style scoped>

</style>
