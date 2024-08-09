const singleIconIncomeModel = require("../model/singleIconModel")

const createSingleIconIncome = async (req, res) => {
    const { name, amount, icon } = req.body
    try {
        const singleIncome = await singleIconIncomeModel.create({ name, amount, icon })
        return res.status(200).json(singleIncome)
    } catch (error) {
        console.log(error);
        return res.status(500).json(error)
    }
}

const getSingleIconIncomes = async (req, res) => {
    try {
        const singleIconIncomes = await singleIconIncomeModel.find({})
        return res.status(200).json(singleIconIncomes)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const getSingleIconIncomeById = async (req, res) => {
    const { id } = req.params
    try {
        const singleIconIncomeById = await singleIconIncomeModel.findById(id)
        return res.status(200).json(singleIconIncomeById)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const updateSingleIconIncomeById = async (req, res) => {
    const { id } = req.params
    const { amount } = req.body
    try {
        const updatedSingleIconIncome = await singleIconIncomeModel.findByIdAndUpdate(id, { amount })
        return res.status(200).json(updatedSingleIconIncome)
    } catch (error) {
        return res.status(500).json(error)
    }
}


const deleteSingleIconIncome = async (req, res) => {
    const { id } = req.params
    try {
        const deletedSingleIconIncome = await singleIconIncomeModel.findByIdAndDelete(id)
        return res.json(200).json(deletedSingleIconIncome)
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = { createSingleIconIncome, getSingleIconIncomeById, getSingleIconIncomes, updateSingleIconIncomeById, deleteSingleIconIncome }