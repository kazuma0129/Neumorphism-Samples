<template>
  <v-container class="fabric" :style="styles">
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
    return {}
  },
  computed: {
    styles() {
      return {
        '--background-color': this.backgroundColor
      }
    }
  },
  mounted() {
    console.log(this.styles)
  }
}
</script>

<style lang="sass">
$ta: 9px
$tb: 18px
$tColor: #d9d9d9

$ba: -9px
$bb: 18px

$backColor: var(--background-color)



.fabric
  background-color: $backColor

.rounded-1
  border-radius: 0px
  background-color: $backColor
  box-shadow: $ta $ta $tb $tColor, $ba $ba $bb $backColor

.rounded-2
  border-radius: 10px
  background-color: $backColor
  box-shadow: $ta $ta $tb $tColor, $ba $ba $bb $backColor

.rounded-3
  border-radius: 20px
  background-color: $backColor
  box-shadow: $ta $ta $tb $tColor, $ba $ba $bb $backColor

.rounded-4
  border-radius: 30px
  background-color: $backColor
  box-shadow: $ta $ta $tb $tColor, $ba $ba $bb $backColor

.rounded-5
  border-radius: 40px
  background-color: $backColor
  box-shadow: $ta $ta $tb $tColor, $ba $ba $bb $backColor

.rounded-6
  border-radius: 50px
  background-color: $backColor
  box-shadow: $ta $ta $tb $tColor, $ba $ba $bb $backColor
</style>
