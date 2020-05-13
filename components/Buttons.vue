<template>
  <v-container
    :style="{
      'background-color': backgroundColor
    }"
  >
    <v-row
      align="center"
      class="rounded-1 ma-xs-1 ma-sm-5 ma-md-10 ma-lg-10 ma-xl-10 pa-xs-3 pa-sm-5 pa-md-10 pa-lg-10 pa-xl-10"
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
        <Button
          :background-color="backgroundColor"
          :button="true"
          :round="20"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Button from '~/components/Button'
export default {
  components: {
    Button
  },
  props: {
    backgroundColor: {
      type: String,
      required: true
    }
  }
}
</script>
