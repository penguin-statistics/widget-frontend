<template>
  <div class="elevation-2 border-radius-1 overflow-x-auto position-relative">
    <MoreDataIndicator />

    <v-data-table
      :items="items"
      :headers="headers"

      :mobile-breakpoint="-1"
      :items-per-page="-1"
      disable-pagination
      hide-default-footer
      sort-by="percentage"
      sort-desc

      class="full-width data-table pb-2"
    >
      <template #item.item="{ item }">
        <div class="d-flex align-center">
          <div class="item-icon">
            <ItemIcon
              fix-position
              :item="item.item"
              :ratio=".6"
              class="mr-2"
            />
          </div>
          <div class="item-name">
            {{ item.itemName }}
          </div>
        </div>
      </template>
      <template #item.percentage="{ item }">
        {{ item.percentageText }}
      </template>
    </v-data-table>
  </div>
</template>

<script>
import strings from '@/utils/strings'
import Table from '@/mixins/Table'
import ItemIcon from '@/components/ItemIcon'
import timeFormatter from '@/utils/timeFormatter'
import MoreDataIndicator from '@/components/MoreDataIndicator'

export default {
  name: 'DataTableStage',
  components: { MoreDataIndicator, ItemIcon },
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
