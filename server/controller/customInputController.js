const customInputExpenseModel = require("../model/customeInputexpenseMode")
const incomeModel = require("../model/customInputIncomeModel")

const createIncome = async (req, res) => {
    const { name, amount } = req.body
    try {
        const newIncome = await incomeModel.create({ name, amount })
        return res.status(200).json(newIncome)
    } catch (error) {
        return res.status(500).json({ error: error.message })

    }
}

const createExpense = async (req, res) => {

    const { name, amount } = req.body
    try {
        const newExpense = await customInputExpenseModel.create({ name, amount })

        return res.status(200).json(newExpense)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const getIncomes = async (req, res) => {
    try {
        const incomes = await incomeModel.find({})
        return res.status(200).json(incomes)
    }
    catch (error) {
        return res.status(500).json(error)
    }
}


const getExpenses = async (req, res) => {
    try {
        const expenses = await customInputExpenseModel.find({})

        return res.status(200).json(expenses)
    } catch (error) {

        return res.status(500).json(error)
    }
}


const deleteIncomeById = async (req, res) => {

    const { id } = req.params

    try {
        const deletedIncome = await incomeModel.findByIdAndDelete(id)

        return res.status(200).json(deletedIncome)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const deleteExpensesById = async (req, res) => {
    const { id } = req.params
    try {

        const deleteExpenses = await customInputExpenseModel.findByIdAndDelete(id)

        return res.status(200).json(deleteExpenses)
    } catch (error) {
        return res.status(500).json(error)

    }
}


const updateIncomeById = async (req, res) => {
    const { id } = req.params
    const { name, amount } = req.body
    try {
        const updateIncome = await incomeModel.findByIdAndUpdate(id, { name, amount })
        return res.status(200).json(updateIncome)
    } catch (error) {
        return res.status(404).json(error)
    }
}

const updateExpanseById = async (req, res) => {
    const { id } = req.params
    const { name, amount } = req.body
    try {
        const updateExpanse = await customInputExpenseModel.findByIdAndUpdate(id, { name, amount })
        return res.status(200).json(updateExpanse)
    } catch (error) {
        return res.status(404).json(error)
    }
}


module.exports = { createIncome, createExpense, getExpenses, getIncomes, deleteIncomeById, deleteExpensesById, updateIncomeById, updateExpanseById }