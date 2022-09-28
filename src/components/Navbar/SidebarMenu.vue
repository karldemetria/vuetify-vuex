<template>
  <v-navigation-drawer v-model="$store.state.drawer" app color="#0e374d" dark>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6"> Application </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <!-- User Group -->
      <v-list-group :value="true" prepend-icon="mdi-account-circle" no-action>
        <template v-slot:activator>
          <v-list-item-title>Admin</v-list-item-title>
        </template>
        <v-list-item
          v-for="item in admins"
          :key="item.title"
          :to="item.to"
          link
          sub-group
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
  export default {
    data() {
      return {
        path: this.$router.history.current.path,

        items: [
          { title: "Dashboard", icon: "mdi-view-dashboard", to: "/" },
          { title: "Todo", icon: "mdi-format-list-checks", to: "/todo-list" },
        ],
        admins: [
          { title: "Users", icon: "mdi-account-group", to: "/users" },
          { title: "RBAC", icon: "mdi-account-cog", to: "/rbac" },
        ],
      };
    },
  };
</script>
