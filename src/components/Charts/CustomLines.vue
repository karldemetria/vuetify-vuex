<template>
  <v-card
    class="mx-auto text-center"
    color="rgba(150, 246, 251, 1)"
    dark
    max-width="1100"
  >
    <v-card-text>
      <v-sheet color="rgba(0, 162, 255, 0.8)">
        <v-sparkline
          :value="value"
          color="rgba(255, 255, 255, 0.8)"
          height="100"
          padding="24"
          stroke-linecap="round"
          smooth
        >
          <template v-slot:label="item"> ${{ item.value }} </template>
        </v-sparkline>
      </v-sheet>
    </v-card-text>

    <v-card-text>
      <div class="text-h5 black--text text--lighten-1">Sales Last 24h</div>
    </v-card-text>

    <v-divider></v-divider>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    value: [423, 446, 675, 510, 590, 610, 760],
  }),
};
</script>