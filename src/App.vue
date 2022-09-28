<template>
  <v-app id="inspire">
    <sidebar-menu></sidebar-menu>
    <navbar />

    <v-main>
      <!--  -->
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
  import SidebarMenu from "./components/Navbar/SidebarMenu";
  import Navbar from "./components/Navbar/Navbar";

  export default {
    components: {
      SidebarMenu,
      Navbar,
    },
    created() {
      console.log(this.$router);
    },
  };
</script>
