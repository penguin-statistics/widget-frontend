<template>
  <DataTableAuto :options="tableOptions" />
<!--  <div class="overflow-x-auto elevation-2 border-radius-1 full-width">-->
<!--    <div-->
<!--      v-if="!tableOptions.errors"-->
<!--      class="d-flex justify-center mt-2 mb-1 hidden-md-and-up"-->
<!--    >-->
<!--      <v-chip-->
<!--        label-->
<!--        class="d-flex align-center flex-row caption text&#45;&#45;text"-->
<!--      >-->
<!--        <v-icon-->
<!--          :size="20"-->
<!--          color="text"-->
<!--          class="mr-1"-->
<!--        >-->
<!--          {{ mdiChevronDoubleLeft }}-->
<!--        </v-icon>-->

<!--        <span class="text&#45;&#45;text">{{ $t('table.scroll') }}</span>-->

<!--        <v-icon-->
<!--          :size="20"-->
<!--          color="text"-->
<!--          class="ml-1"-->
<!--        >-->
<!--          {{ mdiChevronDoubleRight }}-->
<!--        </v-icon>-->
<!--      </v-chip>-->
<!--    </div>-->

<!--    -->
<!--  </div>-->
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
