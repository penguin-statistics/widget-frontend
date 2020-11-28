<template>
  <div class="overflow-x-auto elevation-2 border-radius-1 full-width">
    <div
      class="d-flex justify-center mt-2 mb-1 hidden-md-and-up"
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

    <DataTableAuto :options="tableOptions" />
  </div>
</template>

<script>
import { mdiChevronDoubleLeft, mdiChevronDoubleRight } from '@mdi/js'
import PenguinData from '@/utils/penguin'
import FactTable from '@/components/fact-table/FactTable'
import FactTableItem from '@/components/fact-table/FactTableItem'
import ItemIcon from '@/components/ItemIcon'

export default {
  name: 'DataTable',
  components: { ItemIcon, FactTableItem, FactTable },
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
