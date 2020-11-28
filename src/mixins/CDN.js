import PenguinData from '@/utils/penguin'

export default {
  methods: {
    cdnDeliver (path) {
      return PenguinData.mirror().cdn + path
    }
  }
}
