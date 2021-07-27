<template>
  <div class="home">
    <navbar />
    <total-expense :total-expense="totalExpense" />
    <v-divider></v-divider>
    <v-card class="card">
      <v-card-text>
        <div class="text-h4 font-weight-thin" style="text-align: center">
          Last 5 transactions
        </div>
      </v-card-text>
      <v-container class="card-container" v-for="(expense, index) in expenses" :key="index">
        <expense-card 
          :amount="expense.amount" 
          :category="expense.category" 
          :description="expense.description"
        />
      </v-container>
    </v-card>
  </div>
</template>

<script>
import ExpenseCard from '@/components/ExpenseCard'
import TotalExpense from '@/components/TotalExpense.vue'
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'Dashboard',
  components: {
    ExpenseCard,
    TotalExpense,
    Navbar
  },
  data () {
    return {
      expenses: [],
      totalExpense: null
    }
  },
  mounted(){
    this.totalExpense = 1000
    for(let i = 0;i<5;i++){
      this.expenses.push({
        amount: `Rs. ${100*(i+1)}`,
        category: 'Home',
        description: 'Expense description lorem ipsum'
      })
    }
  }
}
</script>
<style scoped>
 .card{
  width: 90%; 
  margin: 30px auto;
 }
</style>
