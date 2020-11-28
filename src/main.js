import Vue from 'vue'
import App from './App.vue'
import store from './store'
import i18n from './i18n'
import vuetify from './plugins/vuetify'

import '@/styles/base.css'
import '@/styles/theme.scss'
import DataTableError from '@/components/table/DataTableError'

Vue.component('DataTableAuto', {
  functional: true,
  props: {
    options: {
      type: Object,
      required: true
    }
  },
  render: function (createElement, ctx) {
    let component
    let additionalProps = {}
    if (ctx.props.options.type === 'item') {
      component = require(/* webpackChunkName: 'dataTableItem' */ '@/components/table/DataTableItem')
    } else if (ctx.props.options.type === 'stage') {
      component = require(/* webpackChunkName: 'dataTableStage' */ '@/components/table/DataTableStage')
    } else {
      component = DataTableError
      additionalProps = {
        error: 'type'
      }
    }

    return createElement(
      component,
      {
        props: {
          ...ctx.props,
          ...additionalProps
        }
      },
      ctx.children
    )
  }
})

Vue.config.productionTip = false

new Vue({
  store,
  i18n,
  vuetify,
  render: h => h(App)
}).$mount('#app')
