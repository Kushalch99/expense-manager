<template>
  <v-card class="row" elevation="2" outlined style="margin-top: 10px">
    <v-col cols="10">
      <v-card-title> {{ amount }} </v-card-title>
      <v-card-subtitle> {{ category }} </v-card-subtitle>
      <v-card-text> {{ description }} </v-card-text>
    </v-col>
    <v-col cols="2">
      <v-btn elevation="2" icon outlined color="indigo">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
      <v-btn class="ma-2" icon outlined color="indigo">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </v-col>
  </v-card>
</template>

<script>
export default {
  name: 'ExpenseCard',
  props: {
    amount: {
      type: String,
      default: 'Rs. 0'
    },
    category: {
      type: String,
      default: 'Other'
    },
    description: {
      type: String,
      default: ''
    }
  }
}
</script>
