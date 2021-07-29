const db = require('../sequelize').db
const sequelize = require('../sequelize').sequelize

exports.createExpense = async (req, res) => {
  try{
    let { amount, description, category, dateTime } = req.body
    let isValid = validateExpense(amount, description, category, dateTime)
    if(!isValid)
      throw new Error('Invalid request')
    await db.Expense.create({
      amount: amount,
      description: description,
      categoryId: category,
      dateTime: dateTime,
      userId: req.user.id
    })
    return res.status(200).json({ message: 'Successfullly created' })
  }catch(err){
    console.log(err)
    return res.status(500).json({ message: err.message })
  }
}

exports.getExpenses = async (req,  res) => {
  try{
    let limit = parseInt(req.query.limit) || 10
    let offset = parseInt(req.query.offset) || 0
    let result = await db.Expense.findAndCountAll({
      where: { userId: req.user.id },
      limit: limit,
      offset: offset,
      order: [['dateTime', 'desc']]
    })
    return res.status(200).json({ count: result.count, expenses: result.rows })
  }catch(err){
    console.log(err)
    return res.status(500).json({ message: err.message })
  }
}

exports.updateExpense = async (req, res) => {
  try{
    let expenseId = req.params.expenseId
    let { amount, description, category, dateTime } = req.body
    await db.Expense.update(
      {
        amount: amount,
        description: description,
        categoryId: category,
        dateTime: dateTime
      },
      { where: { id: expenseId, userId: req.user.id } } 
    )
    return res.status(200).json({ message: 'Updated Sucessfully '})
  }catch(err){
    console.log(err)
    return res.status(500).json({ message: err.message })
  }
}

exports.deleteExpense = async (req, res) => {
  try{
    let expenseId = req.params.expenseId
    if(!expenseId || expenseId === '')
      throw new Error('Invalid expense')
    await db.Expense.destroy({
      where: {
        id: expenseId,
        userId: req.user.id
      }
    })
    return res.status(200).json({ message: 'Expense Successfully deleted' })
  }catch(err){
    console.log(err)
    return res.status(500).json({ message: err.message })
  }
}

exports.getUserDashboard = async (req, res) => {
  try{
    var result = await db.Expense.findOne({
      where: { userId: req.user.id },
      attributes: [[sequelize.fn('sum', sequelize.col('amount')), 'totalExpense']]
    })
    return res.status(200).json(result)
  }catch(err){
    console.log(err)
    return res.status(500).json({ message: err.message })
  }
}

const validateExpense = ( amount, description, category, dateTime ) => {
  return amount && amount !== '' && category && category !== '' && dateTime && dateTime !== ''
}
