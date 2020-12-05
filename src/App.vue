<template>
  <v-app>
    <Header />

    <v-main class="fill-content-height d-flex align-center">
      <v-container>
        <DataTable
          penguin:element="content"
          style="height: fit-content"
        />
      </v-container>
    </v-main>

    <v-footer
      outlined
      style="background: transparent; border-width: 1px 0 0 0"
      class="d-flex flex-column"
      penguin:element="footer"
    >
      <Settings class="full-width" />
      <v-divider
        class="mt-2 mb-1 full-width hidden-sm-and-up"
      />
      <div
        class="d-flex flex-column justify-center align-center caption my-2"
      >
        <span class="mb-1">
          {{ $t('app.vendor') }} {{ $t('app.name') }} {{ year }} |
          <a
            href="https://github.com/penguin-statistics/widget-frontend"
            target="_blank"
            style="text-decoration: none"
          >
            {{ $t('source') }}
          </a>
        </span>
        <span
          class="grey--text"
          style="font-size: 8px; line-height: 1rem"
        >
          {{ $t('copyright') }}
        </span>
        <span
          class="grey--text"
          style="font-size: 8px; line-height: 1rem"
        >
          {{ $t('version', version) }}
        </span>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import Header from '@/components/Header'
import Settings from '@/components/Settings'
import PrefillEnvironment from '@/mixins/hooks/PrefillEnvironment'
import DataTable from '@/components/DataTable'
export default {
  name: 'App',
  components: {
    DataTable,
    Settings,
    Header
  },
  mixins: [PrefillEnvironment],
  data () {
    return {
      year: new Date().getFullYear()
    }
  },
  computed: {
    version () {
      return {
        app: 'v' + NPM_PACKAGE_VERSION,
        git: GIT_COMMIT,
        time: new Date(parseInt(BUILD_TIME) * 1000).toLocaleString()
      }
    }
  }
}
</script>
