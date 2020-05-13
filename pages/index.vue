<template>
  <v-col>
    <v-container>
      <v-row align="center" class="ma-10 pa-10">
        <v-col align="center">
          <h2
            class="display-4 font-weight-black white--text text--darken-3 title"
          >
            Neumorphism Samples
          </h2>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <NeuSwitch :background-color="colors[1]" />
      <NeuSwitch :background-color="colors[2]" />
    </v-container>

    <v-container v-for="(i, key) in colors" :key="key">
      <Buttons :background-color="i" />
      <!-- <NeuSwitch :background-color="i" /> -->
    </v-container>
  </v-col>
</template>

<script>
import Buttons from '~/components/Buttons'
import NeuSwitch from '~/components/NeuSwitch'
export default {
  components: {
    Buttons,
    NeuSwitch
  },
  data() {
    return {
      colors: ['#ffffff', `#ade5df`, `#60cfc6`, '#eeaaff', '#55b9f3', '#b5e2de']
    }
  }
}
</script>

<style lang="sass">
.title
  text-shadow: rgb(237, 237, 237) 9px 9px 18px, rgb(255, 255, 255) -9px -9px 18px
</style>
