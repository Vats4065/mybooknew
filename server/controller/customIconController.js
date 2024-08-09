const customIconExpenseModel = require("../model/customeIconeExpenseModel")
const customIconIncomeModel = require("../model/customIconIncomeModel")


const createCustomIconIncome = async (req, res) => {
    const { name, amount, icon } = req.body

    try {
        const inputIncome = await customIconIncomeModel.create({ name, amount, icon })
        return res.status(200).json(inputIncome)
    } catch (error) {
        console.log(error);
        return res.status(500).json(error)
    }
}

const createCustomIconExpense = async (req, res) => {
    const { name, amount, icon } = req.body
    try {
        const inputExpense = await customIconExpenseModel.create({ name, amount, icon })
        return res.status(200).json(inputExpense)
    } catch (error) {
        return res.status(500).json(error)
    }
}


const getCustomIconIncomes = async (req, res) => {
    try {
        const customInputIncomes = await customIconIncomeModel.find({})

        return res.status(200).json(customInputIncomes)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const getCustomIconExpenses = async (req, res) => {
    try {
        const customInputExpenses = await customIconExpenseModel.find({})

        return res.status(200).json(customInputExpenses)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const updateIconIncome = async (req, res) => {
    const { id } = req.params
    const { name, amount, incomeIcon } = req.body
    try {
        const updateIncome = await customIconIncomeModel.findByIdAndUpdate(id, { name, amount, incomeIcon })
        return res.status(200).json(updateIncome)
    } catch (error) {
        return res.status(500).json(error)
    }
}


const updateIconExpense = async (req, res) => {
    const { id } = req.params
    const { name, amount, expenseIcon } = req.body
    try {
        const updateExpanse = await customIconExpenseModel.findByIdAndUpdate(id, { name, amount, expenseIcon })
        return res.status(200).json(updateExpanse)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const deleteIconIncome = async (req, res) => {
    const { id } = req.params
    try {
        const deleteIncome = await customIconIncomeModel.findByIdAndDelete(id)
        return res.status(200).json(deleteIncome)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const deleteIconExpense = async (req, res) => {
    const { id } = req.params
    try {
        const deleteExpenses = await customIconExpenseModel.findByIdAndDelete(id)
        return res.status(200).json(deleteExpenses)
    } catch (error) {
        return res.status(500).json(error)
    }
}


module.exports = { createCustomIconIncome, createCustomIconExpense, getCustomIconIncomes, getCustomIconExpenses, updateIconIncome, updateIconExpense, deleteIconIncome, deleteIconExpense }