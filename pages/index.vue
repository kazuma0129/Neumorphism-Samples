<template>
  <v-col>
    <v-container>
      <v-row align="center" class="ma-10 pa-10">
        <v-col align="center">
          <h2 class="grey--text text--darken-3">Neumorphism Samples</h2>
        </v-col>
      </v-row>
    </v-container>

    <v-container v-for="(i, key) in colors" :key="key">
      <Button :background-color="i" />
    </v-container>
  </v-col>
</template>

<script>
import Button from '~/components/Button'
export default {
  components: { Button },
  data() {
    return {
      colors: ['#ffffff', `#ade5df`, `#60cfc6`, '#eeaaff', '#55b9f3', '#b5e2de']
    }
  }
}
</script>
