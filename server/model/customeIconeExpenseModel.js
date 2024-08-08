const mongoose = require('mongoose')

const customIconExpenseSchema = new mongoose.Schema({
    name: String,
    amount: Number,
    expenseIcon: String,
})

const customIconExpenseModel = mongoose.model('customIconExpense', customIconExpenseSchema)


module.exports = customIconExpenseModel