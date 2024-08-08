const mongoose = require('mongoose');

const incomeSchema = new mongoose.Schema({
    name: String,
    amount: Number,
});

const customInputIncomeModel = mongoose.model('customInputIncome', incomeSchema);

module.exports = customInputIncomeModel;
