const mongoose = require('mongoose')

const customIconIncomeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    icon: {
        type: String,
        required: true,
    }
})



const customIconIncomeModel = mongoose.model('customIconIncome', customIconIncomeSchema)

module.exports = customIconIncomeModel