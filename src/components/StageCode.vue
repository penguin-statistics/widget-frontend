<template>
  <span :class="{'stage-code': true, 'small': small, 'x-small': small && !isEastAsianLang}">
    <span
      v-for="[index, c] in codes.entries()"
      :key="index"
      :class="generateStyle(c.s)"
      v-html="c.t"
    />
  </span>
</template>

<script>
import Theme from '@/mixins/Theme'

const s = {
  separator: -1,
  S: 0,
  prefix: 1,
  middle: 2,
  stage: 3
}

export default {
  name: 'StageCode',
  mixins: [Theme],
  props: {
    code: {
      type: String,
      required: true
    },
    small: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    codes () {
      if (this.code.indexOf(' ') !== -1) {
        return [{
          s: s.stage,
          t: this.code
        }]
      }

      const segments = this.code.split('-')
      const results = []
      // format: []{s: (style), t: (text)}

      if (segments.length === 1) {
        results.push({
          s: s.stage,
          t: segments[0].replace(/物资补给/g, '<br>物资补给')
        })
        return results
      }

      for (const [index, segment] of segments.entries()) {
        if (index === 0) {
          // e.g. S4-1 S4-2
          if (segment[0] === 'S' && Number.isInteger(+segment[1])) {
            results.push({
              s: s.S,
              t: 'S'
            })
            results.push({
              s: s.prefix,
              t: segment.slice(1)
            })
          } else {
            results.push({
              s: s.prefix,
              t: segment
            })
          }
        } else if (index === 1) {
          if (Number.isInteger(+segment.slice(-1))) {
            // is stage code
            results.push({
              s: s.stage,
              t: segment
            })
          } else {
            // e.g. SW-EV-1
            results.push({
              s: s.middle,
              t: segment
            })
          }
        } else if (index === 2) {
          // e.g. SW-EV-1
          results.push({
            s: s.stage,
            t: segment
          })
        }

        if (index !== segments.length - 1) {
          results.push({
            s: s.separator,
            t: '-'
          })
        }
      }

      return results.map(el => {
        el.st = this.generateStyle(el.s)
        return el
      })
    },
    isEastAsianLang () {
      return ['zh', 'ja', 'ko'].includes(this.$i18n.locale)
    }
  },
  methods: {
    generateStyle (type) {
      if (type === s.separator) return ['grey--text']
      if (type === s.S) return ['font-weight-bold', this.dark ? 'pink--text' : 'orange--text text--darken-3']
      if (type === s.prefix) return ['grey--text', this.dark ? 'text--lighten-4' : 'text--darken-3']
      if (type === s.middle) return ['grey--text', this.dark ? 'text--lighten-2' : 'text--darken-3']
      if (type === s.stage) return ['font-weight-black', this.dark ? 'yellow--text text--lighten-2' : 'black--text']
    }
  }
}
</script>

<style scoped>
.stage-code {
  display: inline-block;
}
.small {
  font-size: small;
}
.x-small {
  font-size: x-small;
  line-height: 1.4;
}
</style>
