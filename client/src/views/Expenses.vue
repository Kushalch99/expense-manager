<template>
  <div>
    <v-container class="card-container" v-for="(expense, index) in expenses" :key="index">
      <expense-card 
        :amount="expense.amount" 
        :category="expense.category" 
        :description="expense.description"
      />
    </v-container>
  </div>
</template>

<script>
import ExpenseCard from '@/components/ExpenseCard'
export default {
  name: 'Expenses',
  components: {
    ExpenseCard
  },
  data () {
    return {
      expenses: []
    }
  },
  mounted() {
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
 .card-container {
   width: 60%;
   margin: 0 auto;
 }
</style>
