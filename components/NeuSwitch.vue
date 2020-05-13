<template>
  <div :style="boxShadowObject" class="ma-3">
    <!-- <div class="pa-12"> -->
    <input type="checkbox" id="toggle" class="checkbox" />
    <label for="toggle" class="switch"></label>
    <!-- </div> -->
  </div>
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
  mounted() {},
  methods: {}
}
</script>

<style lang="scss">
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  transition: all 0.3s;
}
.switch::after {
  content: '';
  position: absolute;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: white;
  top: 1px;
  left: 1px;
  transition: all 0.3s;
}

.checkbox:checked + .switch::after {
  left: 31px;
}
.checkbox:checked + .switch {
  background-color: #7983ff;
}
.checkbox {
  display: none;
}
</style>
