<template>
  <v-app-bar
    app
    color="primary"
    dark
    dense
    class="d-flex flex-row justify-center header px-4 pr-2 transition-all"
    collapse-on-scroll
    height="40"
    penguin:element="header"
  >
    <h1
      class="hidden-on-collapsed transition-all overflow-hidden text-no-wrap"
      :class="{'error error-heading darken-1': meta.error}"
    >
      {{ meta.title }}
    </h1>
    <ItemIcon
      v-if="item"
      :item="item"
      :ratio=".4"
      class="ml-1 hidden-on-collapsed hidden-on-collapsed--secondary transition-all"
    />
    <v-spacer />
    <a
      :href="meta.url"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://penguin.upyun.galvincdn.com/logos/penguin_stats_logo.png"
        alt="logo"
      >
      <span class="name hidden-xs-only d-none-on-collapsed overflow-hidden text-no-wrap">
        {{ $t('app.vendor') }}
      </span>
      <v-icon class="open-icon ml-1 transition-all">
        {{ mdiOpenInNew }}
      </v-icon>
    </a>
  </v-app-bar>
</template>

<script>
import { mdiOpenInNew } from '@mdi/js'
import PenguinData from '@/utils/penguin'
import ItemIcon from '@/components/ItemIcon'
export default {
  name: 'Header',
  components: { ItemIcon },
  data () {
    return {
      mdiOpenInNew,
      collapsed: false
    }
  },
  computed: {
    meta () {
      return PenguinData.meta()
    },
    item () {
      const item = this.meta.item
      if (!item) return null
      return item
    }
  }
}
</script>

<style scoped>
.header {
  background: #5C258D;
  background: -webkit-linear-gradient(to right, #4389A2, #5C258D);
  background: linear-gradient(to right, #4389A2, #5C258D);
}

.header h1 {
  font-size: 16px;
}
.header h2 {
  padding-left: 4px;
  font-size: 16px;
}

.header img {
  margin-right: 4px;
  height: 24px;
  width: 24px;
}

.header span.name {
  margin: 0;
  font-size: 16px;
}

.header a {
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 0 8px;
  transition: all 225ms cubic-bezier(0.165, 0.84, 0.44, 1);

  outline: 0 dashed #ad7bcf;
  outline-offset: 0;
  border-radius: 4px;
  height: 36px;
}

.v-toolbar--collapsed a {
  border-bottom-right-radius: 12px !important;
}

.vuetify-theme--dark .header {
  outline-color: #c0b1d9 !important;
}

.header a:hover {
  background: rgba(0, 0, 0, .18);
  box-shadow: 0 2px 8px rgba(18, 18, 18, .6);
}
.header a:active {
  background: rgba(0, 0, 0, .4);
  box-shadow: 0 0 2px rgba(18, 18, 18, .3);
}

.header .open-icon {
  width: 16px;
  overflow: hidden;
}
.header a:hover .open-icon {
  transform: scale(1);
}

.header ::v-deep.v-toolbar__content {
  width: 100% !important;
  padding: 0;
}
.hidden-on-collapsed {
  position: relative;
  opacity: 1;
  transform: translateX(0);
}
.v-toolbar--collapsed .hidden-on-collapsed {
  position: relative;
  opacity: 0;
  transform: translateX(-16px);
}
.v-toolbar--collapsed .hidden-on-collapsed--secondary {
  transform: translateX(-24px) !important;
}
.v-toolbar--collapsed .d-none-on-collapsed {
  display: none;
}
.error-heading {
  text-shadow: 0 0 5px rgba(0, 0, 0, .18);
  padding: 4px 12px;
  border-radius: 16px;
  transform: skewX(-7deg);
}
</style>
