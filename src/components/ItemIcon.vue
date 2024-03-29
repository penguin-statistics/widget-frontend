<template>
  <figure
    v-if="item.itemId !== 'furni' && item.spriteCoord"
    class="item-icon--sprite"
    :class="fixPositionClasses"
    :alt="item.itemId"
    :style="{...style, ...sizeStyle}"
  />
  <v-icon
    v-else-if="item.itemId === 'furni'"
    :class="{...furniturePadding, ...fixPositionClasses}"

    class="deep-orange item-icon--special white--text"
    :size="config.iconSize * 0.9"
  >
    {{ mdiLamp }}
  </v-icon>
  <v-icon
    v-else
    :class="{...furniturePadding, ...fixPositionClasses}"

    class="blue item-icon--special white--text"
    :size="config.iconSize * 0.9"
  >
    {{ mdiTreasureChest }}
  </v-icon>
</template>

<script>
import CDN from '@/mixins/CDN'
import { mdiLamp, mdiTreasureChest } from '@mdi/js'

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
    },
    fixPosition: {
      type: Boolean,
      default () {
        return false
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
        dimensions: [1098 / 2, 3294 / 2],
        url: "/sprite/sprite.202303070456.small.png"
      }
    }
  },
  computed: {
    furniturePadding () {
      let padding
      if (this.ratio <= 0.25) {
        padding = 'pa-0'
      } else if (this.ratio <= 0.5) {
        padding = 'pa-1'
      } else if (this.ratio <= 0.75) {
        padding = 'pa-2'
      } else if (this.ratio <= 1) {
        padding = 'pa-4'
      } else {
        padding = 'pa-6'
      }
      return { [padding]: true }
    },
    fixPositionClasses () {
      return { 'item-icon--fix-pos': this.fixPosition }
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
.item-icon--fix-pos.item-icon--sprite {
  margin-top: 6px
}
.item-icon--special {
  border-radius: 50%;
}
.item-icon--fix-pos.item-icon--special {
  margin-left: 2px;
}
</style>
