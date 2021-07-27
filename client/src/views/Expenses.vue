<template>
  <div>
    <navbar />
    <v-container class="card-container">
      <v-btn style="position: absolute; right: 0;margin: 10px" @click="showDialog = true">New Expense</v-btn>
    </v-container>
    <v-container class="card-container" v-for="(expense, index) in expenses" :key="index">
      <expense-card 
        :amount="expense.amount" 
        :category="expense.category" 
        :description="expense.description"
        :date-time="expense.dateTime"
      />
    </v-container>
    <add-expense-dialog :showDialog="showDialog" @close="(value) => showDialog = value"/>
  </div>
</template>

<script>
import ExpenseCard from '@/components/ExpenseCard'
import AddExpenseDialog from '@/components/AddExpenseDialog.vue'
import moment from 'moment'
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'Expenses',
  components: {
    ExpenseCard,
    AddExpenseDialog,
    Navbar
  },
  data () {
    return {
      expenses: [],
      showDialog: false
    }
  },
  mounted() {
    for(let i = 0;i<5;i++){
      this.expenses.push({
        amount: `${100*(i+1)}`,
        category: 'Home',
        description: 'Expense description lorem ipsum',
        dateTime: moment()
      })
    }
  }
}
</script>

<style scoped>
 .card-container {
   width: 60%;
   margin: 0 auto;
 }
</style>
