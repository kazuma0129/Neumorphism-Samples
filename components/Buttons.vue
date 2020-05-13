<template>
  <v-container
    :style="{
      'background-color': backgroundColor
    }"
  >
    <v-col>
      <!-- <NeuSwitch :background-color="backgroundColor" /> -->
      <v-row
        align="center"
        class="ma-xs-1 ma-sm-5 ma-md-10 ma-lg-10 ma-xl-10 pa-xs-3 pa-sm-5 pa-md-10 pa-lg-10 pa-xl-10"
      >
        <v-col
          v-for="(i, key) in 6"
          :key="key"
          xs="4"
          sm="4"
          md="4"
          lg="2"
          xl="2"
          align="center"
          justify="center"
        >
          <Card
            :background-color="backgroundColor"
            :button="true"
            :round="key * 10"
          />
          <span class="grey--text text--darken-2">
            round - {{ key * 10 }}
          </span>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
import Card from '~/components/Card'
// import NeuSwitch from '~/components/NeuSwitch'
export default {
  components: {
    Card
    // NeuSwitch
  },
  props: {
    backgroundColor: {
      type: String,
      required: true
    }
  }
}
</script>
