export default function (maxFrameCount) {
  return {
    data() {
      return {
        frameCount: 0
      }
    },
    mounted() {
      const refreshFrameCount = () => {
        requestAnimationFrame(() => {
          this.frameCount++
          console.log(this.frameCount, maxFrameCount)
          if (this.frameCount < maxFrameCount) {
            refreshFrameCount()
          }
        })
      }
      refreshFrameCount()
    },
    methods: {
      defer(showInFrameCount) {
        return this.frameCount >= showInFrameCount
      }
    }
  }
}