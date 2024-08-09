const express = require('express');
const { createCustomIconIncome, createCustomIconExpense, getCustomIconIncomes, getCustomIconExpenses, updateIconIncome, updateIconExpense, deleteIconIncome, deleteIconExpense } = require('../controller/customIconController');
const uploadFile = require('../middleware/ImageUpload');

const customIconRouter = express.Router()

customIconRouter.post("/createIconIncome", createCustomIconIncome)
customIconRouter.post("/createIconExpense", createCustomIconExpense)
customIconRouter.get("/getIconIncome", getCustomIconIncomes)
customIconRouter.get("/getIconExpense", getCustomIconExpenses)
customIconRouter.patch("/updateIconIncome/:id", updateIconIncome)
customIconRouter.patch("/updateIconExpense/:id", updateIconExpense)
customIconRouter.delete("/deleteIconIncome/:id", deleteIconIncome)
customIconRouter.delete("/deleteIconExpense/:id", deleteIconExpense)

module.exports = customIconRouter