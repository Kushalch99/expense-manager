<template>
  <div class="app">
    <v-card>
      <v-navigation-drawer
        permanent
        expand-on-hover
      >
        <v-list>
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                Expense Manager
              </v-list-item-title>
              <v-list-item-subtitle>{{ name }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>
        <v-list>
          <menu-item title="Dashboard" icon="mdi-folder" />
          <menu-item title="Expenses" icon="mdi-account-multiple" />
          <menu-item title="Report" icon="mdi-star"/>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </div>
</template>
<script>
import MenuItem from '@/components/MenuItem'
export default {
  components: {
    MenuItem
  }
}
</script>
<style scoped>
.app {
  height: 100%;
}
</style>
