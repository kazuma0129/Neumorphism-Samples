<template>
  <v-col>
    <v-container>
      <v-row align="center" class="ma-10 pa-10">
        <v-col align="center">
          <h2 class="grey--text text--darken-3">Neumorphism Samples</h2>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <Button :background-color="fabric.color" :background-image="fabric.img" />
    </v-container>

    <!-- <v-container>
      <Button
        :background-color="gunMetal.color"
        :background-image="gunMetal.img"
      />
    </v-container> -->
  </v-col>
</template>

<script>
import Button from '~/components/Button'
export default {
  components: { Button },
  data() {
    return {
      fabric: {
        color: '#ffffff',
        img: 'https://www.transparenttextures.com/patterns/fabric-plaid.png'
      }
    }
  }
}
</script>
