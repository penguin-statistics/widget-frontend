export default {
  computed: {
    statHeaders () {
      return [
        {
          text: this.$t('table.headers.quantity'),
          align: 'start',
          value: 'quantity',
          width: '90px'
        },
        {
          text: this.$t('table.headers.times'),
          align: 'start',
          value: 'times',
          width: '90px'
        },
        {
          text: this.$t('table.headers.percentage'),
          align: 'start',
          value: 'percentage',
          width: '100px'
        },
        {
          text: this.$t('table.headers.apPPR'),
          align: 'start',
          value: 'apPPR',
          width: '130px'
        },
        {
          text: this.$t('table.headers.timeRange'),
          align: 'start',
          value: 'timeRange',
          sortable: false,
          width: '140px'
        }
      ]
    }
  }
}
