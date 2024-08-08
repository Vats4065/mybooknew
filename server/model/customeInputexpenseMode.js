const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },

});

const customInputExpenseModel = mongoose.model('customInputExpense', expenseSchema);

module.exports = customInputExpenseModel;
