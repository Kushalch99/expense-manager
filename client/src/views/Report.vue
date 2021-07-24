<template>
  <div>
    <h2 style="text-align: center; margin-top: 5px">Expense Report</h2>
    <v-card class="report-card" style="background: aliceblue">
      <line-chart v-if="isMounted" :chart-data="weeklyChartData" :options="weeklyChartOptions" :type="true" />    
    </v-card>
    <div class="row" style="margin: 0 auto;width: 90%">
      <v-card class="report-card col-5" style="background: aliceblue">
        <doughnut-chart v-if="isMounted" :chart-data="categoryChartData" :options="{title: { display: true, text: 'Category Expenses of the month'}}"/>
      </v-card>
      <v-card class="report-card col-5" style="background: aliceblue">
        <pie-chart v-if="isMounted" :chart-data="monthlyChartData" :options="{title: { display: true, text: 'Last 6 month expenses' }}"/>
      </v-card>
    </div>
  </div>
</template>
<script>
import LineChart from '@/components/charts/LineChart.vue'
import DoughnutChart from '@/components/charts/DoughnutChart.vue'
import PieChart from '@/components/charts/PieChart.vue'
export default {
  name: 'Report',
  components: {
    LineChart,
    DoughnutChart,
    PieChart
  },
  data () {
    return {
      weeklyChartData: {},
      categoryChartData: {},
      monthlyChartData: {},
      weeklyChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        title: {
          display: true,
          text: 'Weekly Expenses'
        },
        scales: {
          xAxes: [{
            gridLines: {
              display: false
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      },
      isMounted: false
    }
  },
  mounted () {
    this.weeklyChartData.labels = ['']
    for(let i=0;i<4;i++)
      this.weeklyChartData.labels.push(`Week ${i+1}`)
    this.weeklyChartData.datasets = [{
      backgroundColor: '#FF3D67',
      data: []
    }]
    this.weeklyChartData.datasets[0].data.push(0, 1000, 2500, 500, 0)
    this.categoryChartData.labels = ['Home' , 'Food' , 'Fuel' , 'Shopping', 'Other'],
    this.categoryChartData.datasets = [{
      data: [300, 50, 100, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(255, 205, 235)',
        'rgb(10, 10, 10)'
      ],
      hoverOffset: 4
    }]
    this.monthlyChartData.labels = ['Jan' , 'Feb' , 'Mar' , 'Oct', 'Nov'],
    this.monthlyChartData.datasets = [{
      data: [300, 50, 100, 50, 1000],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(255, 205, 235)',
        'rgb(54, 205, 86)'
      ],
      hoverOffset: 4
    }]
    
    this.isMounted = true
  }
}
</script>
<style scoped>
  .report-card{
    width: 90%;
    margin: 20px auto;
    padding: 30px;
  }
</style>
