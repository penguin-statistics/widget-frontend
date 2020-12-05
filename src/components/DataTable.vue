<template>
  <DataTableAuto
    :options="tableOptions"
  />
</template>

<script>
import { mdiChevronDoubleLeft, mdiChevronDoubleRight } from '@mdi/js'
import PenguinData from '@/utils/penguin'

export default {
  name: 'DataTable',
  data () {
    return {
      mdiChevronDoubleLeft,
      mdiChevronDoubleRight
    }
  },
  computed: {
    tableOptions () {
      const errors = PenguinData.all().errors
      if (errors) return { errors }
      return PenguinData.matrix.data()
    }
  }
}
</script>

<style scoped>

</style>
