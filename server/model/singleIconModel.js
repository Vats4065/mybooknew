const mongoose = require('mongoose');

const singleIconIncomeSchema = new mongoose.Schema({
    name: String,
    amount: Number,
    icon: {
        type: String,
        required: true,
        default: null
    }
})

const singleIconIncomeModel = mongoose.model('singleIconIncome', singleIconIncomeSchema)

module.exports = singleIconIncomeModel 