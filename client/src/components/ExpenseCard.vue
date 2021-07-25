<template>
  <div>
    <v-card class="row" elevation="2" outlined style="margin-top: 10px">
      <v-col cols="10">
        <v-card-title> Rs. {{ amount }} </v-card-title>
        <v-card-subtitle> {{ category }} - {{ formattedDateTime }} </v-card-subtitle>
        <v-card-text> {{ description }} </v-card-text>
      </v-col>
      <v-col cols="2">
        <v-btn elevation="2" icon outlined color="indigo" @click="showDeleteDialog = true">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
        <v-btn class="ma-2" icon outlined color="indigo" @click="showDialog = true">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </v-col>
    </v-card>
    <delete-expense-dialog :showDialog="showDeleteDialog" @close="(value) => showDeleteDialog = value"/>
    <add-expense-dialog :showDialog="showDialog" :isExistingExpense="true" :expense="expense" @close="(value) => showDialog = value"/>
  </div>
</template>

<script>
import AddExpenseDialog from './AddExpenseDialog.vue'
import moment from 'moment'
import DeleteExpenseDialog from './DeleteExpenseDialog.vue'
export default {
  components: { AddExpenseDialog, DeleteExpenseDialog },
  name: 'ExpenseCard',
  props: {
    amount: {
      type: String,
      default: '0'
    },
    category: {
      type: String,
      default: 'Other'
    },
    description: {
      type: String,
      default: ''
    },
    dateTime: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      showDialog: false,
      showDeleteDialog: false
    }
  },
  computed: {
    expense () {
      return {
        amount: this.amount,
        category: this.category,
        description: this.description,
        date: moment(this.dateTime).format('DD-MM-YYYY'),
        time: moment(this.dateTime).format('hh:mm')
      }
    },
    formattedDateTime(){
      return moment(this.dateTime).format('DD-MM-YYYY hh:mm a')
    }
  }
}
</script>
