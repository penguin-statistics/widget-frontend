<template>
  <v-app-bar
    app
    color="primary"
    dark
    dense
    class="d-flex flex-row header px-4 pr-2"
    hide-on-scroll
    height="40"
    penguin:element="header"
  >
    <h1>{{ meta.title }}</h1>
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
      <span class="name hidden-xs-only">
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
export default {
  name: 'Header',
  data () {
    return {
      mdiOpenInNew
    }
  },
  computed: {
    meta () {
      return PenguinData.meta()
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
  transition: all 175ms cubic-bezier(0.165, 0.84, 0.44, 1);

  outline: 0 dashed #ad7bcf;
  outline-offset: 0;
  border-radius: 4px;
  height: 36px;
}

.vuetify-theme--dark .header {
  outline-color: #c0b1d9 !important;
}

.header a:hover {
  background: rgba(0, 0, 0, .18)
}
.header a:active {
  background: rgba(0, 0, 0, .3);
  outline-width: 1px
}

.header .open-icon {
  width: 0;
  overflow: hidden;
  transform: scale(0);
}
.header a:hover .open-icon {
  width: 16px;
  transform: scale(1);
}

.header ::v-deep.v-toolbar__content {
  width: 100% !important;
  padding: 0;
}
</style>
