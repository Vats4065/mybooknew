const mongoose = require('mongoose')

const customIconIncomeSchema = new mongoose.Schema({
    name: String,
    amount: Number,
    incomeIcon: String
})



const customIconIncomeModel = mongoose.model('customIconIncome', customIconIncomeSchema)

module.exports = customIconIncomeModel