<template>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="$store.state.search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="$store.state.admin.headers"
      :items="$store.state.admin.users"
      :search="$store.state.admin.search"
    ></v-data-table>
  </v-card>
</template>
<script>
  export default {
    created() {
      console.log("test");
      this.$store.commit("userList");

      //   this.userList();
    },
    methods: {},
  };
</script>
