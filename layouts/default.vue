<template>
  <v-app dark>
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  background: #fff;
  /* background: -webkit-linear-gradient(
    310deg,
    #c9d6ff,
    #e2e2e2,
    #ffe8df
  );
  background: linear-gradient(
    310deg,
    #c9d6ff,
    #e2e2e2,
    #ffe8df
  );  */

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s;
  }
  .v-enter,
  .v-leave-to {
    opacity: 0;
  }
  a {
    color: #333;
  }
}
</style>
