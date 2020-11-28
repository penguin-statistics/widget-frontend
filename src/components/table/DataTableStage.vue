<template>
  <v-data-table
    :items="items"
    :headers="headers"

    :mobile-breakpoint="-1"
    :items-per-page="-1"
    disable-pagination
    hide-default-footer
    sort-by="percentage"
    sort-desc

    class="full-width data-table"
  >
    <template #item.item="{ item }">
      <div class="d-flex align-center">
        <ItemIcon
          :item="item.item"
          :ratio=".6"
          class="mr-2"
        />
        {{ item.itemName }}
      </div>
    </template>
    <template #item.percentage="{ item }">
      {{ item.percentageText }}
    </template>
  </v-data-table>
</template>

<script>
import strings from '@/utils/strings'
import Table from '@/mixins/Table'
import ItemIcon from '@/components/ItemIcon'
import timeFormatter from '@/utils/timeFormatter'

export default {
  name: 'DataTableStage',
  components: { ItemIcon },
  mixins: [Table],
  props: {
    options: {
      type: Object,
      required: true
    }
  },
  computed: {
    headers () {
      return [
        {
          text: this.$t('table.headers.item'),
          align: 'start',
          sortable: false,
          value: 'item',
          width: '250px'
        },
        ...this.statHeaders
      ]
    },
    items () {
      return this.options.matrix
        .map(el => ({
          ...el,
          itemName: strings.translate(el.item, 'name'),
          timeRange: timeFormatter.startEnd(el.start, el.end)
        }))
    }
  }
}
</script>

<style scoped>

</style>
