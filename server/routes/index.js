const authController = require('../controller/authcontroller')
const expenseController = require('../controller/expensecontroller')
const passport = require('passport')

module.exports = function (app) {
  
  app.post('/api/login', 
    authController.login
  )
  
  app.post('/api/signup',
    authController.signup
  )
  
  app.post('/api/expense',
    passport.authenticate("jwt", { session: false }),
    expenseController.createExpense
  )
  
  app.get('/api/expenses',
    passport.authenticate("jwt", { session: false }),
    expenseController.getExpenses
  )
  
  app.delete('/api/expense/:id',
    passport.authenticate("jwt", { session: false }),
    expenseController.deleteExpense
  )
}
