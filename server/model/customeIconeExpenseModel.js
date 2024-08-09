const mongoose = require('mongoose')

const customIconExpenseSchema = new mongoose.Schema({
    name: String,
    amount: Number,
    icon: String,
})

const customIconExpenseModel = mongoose.model('customIconExpense', customIconExpenseSchema)


module.exports = customIconExpenseModel