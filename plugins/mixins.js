import Vue from 'vue'

/**
 * @param {string} hex
 */
const hexToHSL = (hex) => {
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
  const HSL = {
    h: h * 360,
    s: s * 100,
    l: l * 100
  }
  return HSL
}

/**
 * @param {Object} hslObject
 */
const HSLToHex = (hslObject) => {
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
  const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`
  return hex
}

/**
 * @param {string} bottomComputedColor
 * @param {string} topComputedColor
 * @param {boolean} isInset
 */
const genBoxShadow = (
  bottomComputedColor,
  topComputedColor,
  isInset = false
) => {
  const bottomOffsetX = '9px'
  const bottomOffsetY = '9px'
  const bottomBlurRadius = '18px'
  const bottomShadowColor = bottomComputedColor
  // const bottomInset = 'inset'
  // const bottomInset = ''
  let bottomInset = ''

  const topOffsetX = '-9px'
  const topOffsetY = '-9px'
  const topBlurRadius = '18px'
  const topShadowColor = topComputedColor
  // const topInset = 'inset'
  // const topInset = ''
  let topInset = ''

  if (isInset) bottomInset = topInset = `inset`

  const boxShadow = `${bottomInset} ${bottomOffsetX} ${bottomOffsetY} ${bottomBlurRadius} ${bottomShadowColor}, ${topInset} ${topOffsetX} ${topOffsetY} ${topBlurRadius} ${topShadowColor}`
  return boxShadow
}

Vue.mixin({
  methods: {
    hexToHSL,
    HSLToHex,
    genBoxShadow
  }
})
