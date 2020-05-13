<template>
  <div :style="boxShadowObject" @click="push()">
    <div class="pa-12"></div>
  </div>
</template>

<script>
export default {
  props: {
    backgroundColor: {
      type: String,
      required: true
    },
    button: {
      type: Boolean,
      default: false,
      require: false
    },
    round: {
      type: Number,
      default: 0,
      required: false
    }
  },
  data() {
    return {
      topColor: ``,
      bottomColor: ``,
      inset: false
    }
  },
  computed: {
    boxShadowObject() {
      return {
        'background-color': this.backgroundColor,
        'box-shadow': this.genBoxShadow(
          this.bottomComputedColor,
          this.topComputedColor,
          this.inset
        ),
        'border-radius': `${this.round}px`
      }
    },
    bottomComputedColor() {
      const orgHex = this.backgroundColor
      const bottomHSL = this.hexToHSL(orgHex)
      if (bottomHSL.s > 10) bottomHSL.s -= 7
      if (bottomHSL.l > 10) bottomHSL.l -= 7
      const result = this.HSLToHex(bottomHSL)
      return result
    },
    topComputedColor() {
      const orgHex = this.backgroundColor
      const topHSL = this.hexToHSL(orgHex)
      if (topHSL.s < 90) topHSL.s += 7
      if (topHSL.l < 90) topHSL.l += 7
      const result = this.HSLToHex(topHSL)
      return result
    }
  },
  methods: {
    push() {
      if (this.button) this.inset = !this.inset
    }
    // genBoxShadow(isInset) {
    //   const bottomOffsetX = '9px'
    //   const bottomOffsetY = '9px'
    //   const bottomBlurRadius = '18px'
    //   const bottomShadowColor = this.bottomComputedColor
    //   let bottomInset = ''

    //   const topOffsetX = '-9px'
    //   const topOffsetY = '-9px'
    //   const topBlurRadius = '18px'
    //   const topShadowColor = this.topComputedColor
    //   let topInset = ''

    //   if (isInset) bottomInset = topInset = `inset`

    //   const boxShadow = `${bottomInset} ${bottomOffsetX} ${bottomOffsetY} ${bottomBlurRadius} ${bottomShadowColor}, ${topInset} ${topOffsetX} ${topOffsetY} ${topBlurRadius} ${topShadowColor}`
    //   return boxShadow
    // }
  }
}
</script>

<style lang="sass"></style>
