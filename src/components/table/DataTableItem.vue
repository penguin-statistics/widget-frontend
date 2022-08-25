<template>
  <div class="elevation-2 border-radius-1 overflow-x-auto">
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
      <template #item.zoneName="{ item }">
        <ZoneName :zone="item.zone" />
      </template>
      <template #item.stage="{ item }">
        <StageCode :code="item.stageCode" :small="invalidCost(item.stage.apCost)" />
      </template>
      <template #item.stage.apCost="{ item }">
        <span v-if="invalidCost(item.stage.apCost)" style="opacity: 0.25">
          —
        </span>
        <span v-else class="deep-orange--text font-weight-bold">
          {{ item.stage.apCost }}
        </span>
      </template>
      <template #item.percentage="{ item }">
        {{ item.percentageText }}
      </template>
    </v-data-table>
  </div>
</template>

<script>
import MoreDataIndicator from '@/components/MoreDataIndicator'
import StageCode from '@/components/StageCode'
import ZoneName from '@/components/ZoneName'
import Table from '@/mixins/Table'
import strings from '@/utils/strings'
import timeFormatter from '@/utils/timeFormatter'

export default {
  name: 'DataTableItem',
  components: { MoreDataIndicator, ZoneName, StageCode },
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
          text: this.$t('table.headers.zoneName'),
          align: 'end',
          sortable: false,
          value: 'zoneName',
          width: '150px'
        },
        {
          text: this.$t('table.headers.stage'),
          align: 'start',
          sortable: false,
          value: 'stage',
          width: '120px'
        },
        {
          text: this.$t('table.headers.apCost'),
          align: 'start',
          value: 'stage.apCost',
          width: '90px'
        },
        ...this.statHeaders
      ]
    },
    items () {
      return this.options.matrix
        .map(el => ({
          ...el,
          stageCode: strings.translate(el.stage, 'code'),
          timeRange: timeFormatter.startEnd(el.start, el.end)
        }))
    }
  },
  methods: {
    invalidCost (cost) {
      return [NaN, null, undefined, 99].includes(cost)
    }
  }
}
</script>

<style scoped>

</style>
