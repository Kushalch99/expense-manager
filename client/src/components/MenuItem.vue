<template>
  <v-list-item link :to="to">
    <v-list-item-icon>
      <v-icon>{{ icon }}</v-icon>
    </v-list-item-icon>
    <v-list-item-title>{{ title }}</v-list-item-title>
  </v-list-item>
</template>
<script>
export default {
  name: 'MenuItem',
  props: {
    title: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: '/'
    }
  }
}
</script>
