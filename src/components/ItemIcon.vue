<template>
  <figure
    v-if="item.itemId !== 'furni' && item.spriteCoord"
    class="item-icon--sprite"
    :alt="item.itemId"
    :style="{...style, ...sizeStyle}"
  />
  <v-icon
    v-else-if="item.itemId === 'furni'"
    :class="furniturePadding"

    class="deep-orange item-icon--special white--text"
    :size="config.iconSize"
  >
    {{ mdiLamp }}
  </v-icon>
  <v-icon
    v-else
    :class="furniturePadding"

    class="blue item-icon--special white--text"
    :size="config.iconSize"
  >
    {{ mdiTreasureChest }}
  </v-icon>
</template>

<script>
import { mdiLamp, mdiTreasureChest } from '@mdi/js'
import CDN from '@/mixins/CDN'

export default {
  name: 'ItemIcon',
  mixins: [CDN],
  props: {
    item: {
      type: Object,
      required: true
    },
    ratio: {
      type: Number,
      default () {
        return 1
      }
    }
  },
  data () {
    return {
      mdiLamp,
      mdiTreasureChest,

      previousIconSize: 60,
      sprite: {
        iconSize: 183 / 2,
        dimensions: [1098 / 2, 2562 / 2],
        url: '/sprite/sprite.202011011235.small.png'
      }
    }
  },
  computed: {
    furniturePadding () {
      if (this.ratio <= 0.25) {
        return ['pa-0']
      } else if (this.ratio <= 0.5) {
        return ['pa-1']
      } else if (this.ratio <= 0.75) {
        return ['pa-2']
      } else if (this.ratio <= 1) {
        return ['pa-4']
      } else {
        return ['pa-6']
      }
    },
    current () {
      return this.sprite
    },
    config () {
      const zoom = this.ratio * (this.previousIconSize / this.current.iconSize)
      return {
        iconSize: Math.round(zoom * this.current.iconSize),
        url: this.cdnDeliver(this.current.url),
        zoom
      }
    },
    sizeStyle () {
      return {
        height: `${this.config.iconSize}px`,
        width: `${this.config.iconSize}px`
      }
    },
    style () {
      const style = {
        backgroundSize: `${this.config.zoom * this.current.dimensions[0]}px ${this.config.zoom * this.current.dimensions[1]}px`,
        backgroundImage: `url(${this.config.url})`
      }
      if (this.item.spriteCoord) {
        style.backgroundPosition = this.transformCoordinate(this.item.spriteCoord)
      }
      return style
    }
  },
  methods: {
    transformCoordinate (coordinate) {
      const factorized = this.config.iconSize
      return `-${coordinate[0] * factorized}px -${coordinate[1] * factorized}px`
    }
  }
}
</script>

<style scoped>
.item-icon--sprite {
  background-repeat: no-repeat;
  height: 60px;
  width: 60px;
  display: inline-block;
  overflow: hidden;
}

.item-icon--special {
  border-radius: 50%;
}
</style>
