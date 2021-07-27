module.exports = function (app) {
  
  app.post('/api/login', 
    authController.login
  )
  
  app.post('/api/signup',
    authController.signup
  )
  
}
