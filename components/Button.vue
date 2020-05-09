<template>
  <v-container
    class="fabric"
    :style="{
      'background-color': backgroundColor
    }"
  >
    <v-row align="center" class="ma-10 pa-10">
      <v-col
        v-for="(i, key) in 6"
        :key="key"
        cols="2"
        align="center"
        justify="center"
      >
        <v-card
          flat
          shaped
          :class="[`rounded-` + i]"
          width="90"
          height="90"
          min-width="90"
          min-height="90"
          :style="boxShadowObject"
        >
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    backgroundColor: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      topColor: ``,
      bottomColor: ``
    }
  },
  computed: {
    boxShadowObject() {
      return {
        'background-color': this.backgroundColor,
        'box-shadow': this.genBoxShadow()
      }
    },
    bottomComputedColor() {
      const orgHex = this.backgroundColor
      const bottomHSL = this.hexToHSL(orgHex)
      if (bottomHSL.s > 10) bottomHSL.s -= 10
      if (bottomHSL.l > 10) bottomHSL.l -= 10
      const result = this.hslToHex(bottomHSL)
      return result
    },
    topComputedColor() {
      const orgHex = this.backgroundColor
      const topHSL = this.hexToHSL(orgHex)
      if (topHSL.s < 90) topHSL.s += 10
      if (topHSL.l < 90) topHSL.l += 10
      const result = this.hslToHex(topHSL)
      return result
    }
  },
  mounted() {},
  methods: {
    hexToHSL(hex) {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
      const r = parseInt(result[1], 16) / 255
      const g = parseInt(result[2], 16) / 255
      const b = parseInt(result[3], 16) / 255
      const max = Math.max(r, g, b)
      const min = Math.min(r, g, b)
      let h = 0
      let s = 0
      const l = (max + min) / 2
      if (max === min) {
        h = s = 0 // achromatic
      } else {
        const d = max - min
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0)
            break
          case g:
            h = (b - r) / d + 2
            break
          case b:
            h = (r - g) / d + 4
            break
        }
        h /= 6
      }
      const HSL = { h: h * 360, s: s * 100, l: l * 100 }
      return HSL
    },
    hslToHex(hslObject) {
      const h = hslObject.h / 360
      const s = hslObject.s / 100
      const l = hslObject.l / 100
      let r, g, b
      if (s === 0) {
        r = g = b = l // achromatic
      } else {
        const hue2rgb = (p, q, t) => {
          if (t < 0) t += 1
          if (t > 1) t -= 1
          if (t < 1 / 6) return p + (q - p) * 6 * t
          if (t < 1 / 2) return q
          if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
          return p
        }
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s
        const p = 2 * l - q
        r = hue2rgb(p, q, h + 1 / 3)
        g = hue2rgb(p, q, h)
        b = hue2rgb(p, q, h - 1 / 3)
      }
      const toHex = (x) => {
        const hex = Math.round(x * 255).toString(16)
        return hex.length === 1 ? '0' + hex : hex
      }
      return `#${toHex(r)}${toHex(g)}${toHex(b)}`
    },

    /**
     * box-shadow: bottom-offset-x bottom-offset-y bottom-blur-radius bottom-shadow-color,
     *                top-offset-x top-offset-y top-blur-radius top-shadow-color,
     */
    genBoxShadow(bottomObj, topObj) {
      const bottomOffsetX = '9px'
      const bottomOffsetY = '9px'
      const bottomBlurRadius = '18px'
      const bottomShadowColor = this.bottomComputedColor
      const topOffsetX = '-9px'
      const topOffsetY = '-9px'
      const topBlurRadius = '18px'
      const topShadowColor = this.topComputedColor

      const boxShadow = `${bottomOffsetX} ${bottomOffsetY} ${bottomBlurRadius} ${bottomShadowColor}, ${topOffsetX} ${topOffsetY} ${topBlurRadius} ${topShadowColor}`
      return boxShadow
    }
  }
}
</script>

<style lang="sass">
.rounded-1
  border-radius: 0px

.rounded-2
  border-radius: 10px

.rounded-3
  border-radius: 20px

.rounded-4
  border-radius: 30px

.rounded-5
  border-radius: 40px

.rounded-6
  border-radius: 50px
</style>
