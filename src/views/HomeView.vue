<template>
  <v-container grey lighten-3>
    <v-row dense>
      <v-col cols="12">
        <v-card class="pa-8">
          <spark-lines />
        </v-card>
      </v-col>

      <v-col cols="12" class="mt-2">
        <v-card class="pa-8">
          <registration-lines />
        </v-card>
      </v-col>

      <v-col cols="12" class="mt-2">
        <v-card class="pa-8">
          <custom-lines />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import SparkLines from "../components/Charts/SparkLines";
import RegistrationLines from "../components/Charts/RegistrationLines";
import CustomLines from "../components/Charts/CustomLines";

export default {
  name: "Home",

  components: {
    SparkLines,
    RegistrationLines,
    CustomLines,
  },
};
</script>
