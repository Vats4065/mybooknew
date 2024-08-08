const mongoose = require('mongoose');

const singleIconIncomeSchema = new mongoose.Schema({
    name: String,
    amount: Number,
    singleIconIncomeImg: String
})

const singleIconIncomeModel = mongoose.model('singleIconIncome', singleIconIncomeSchema)

module.exports = singleIconIncomeModel 