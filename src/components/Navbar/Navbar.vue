<template>
  <v-app-bar app color="#0e374d" dark>
    <v-app-bar-nav-icon
      @click="$store.state.drawer = !$store.state.drawer"
    ></v-app-bar-nav-icon>

    <v-app-bar-title>{{ $route.meta.title }}</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>
</template>
<script>
  export default {
    data() {
      return {
        title: "",
      };
    },
  };
</script>
