const express = require('express');
const { createCustomIconIncome, createCustomIconExpense, getCustomIconIncomes, getCustomIconExpenses, updateIconIncome, updateIconExpense, deleteIconIncome, deleteIconExpense } = require('../controller/customIconController');
const uploadFile = require('../middleware/ImageUpload');

const customIconRouter = express.Router()

customIconRouter.post("/createIconIncome", uploadFile.single('image'), createCustomIconIncome)
customIconRouter.post("/createIconExpense", uploadFile.single('image'), createCustomIconExpense)
customIconRouter.get("/getIconIncome", getCustomIconIncomes)
customIconRouter.get("/getIconExpense", getCustomIconExpenses)
customIconRouter.patch("/updateIconIncome/:id", updateIconIncome)
customIconRouter.patch("/updateIconExpense/:id", updateIconExpense)
customIconRouter.delete("/deleteIconIncome/:id", deleteIconIncome)
customIconRouter.delete("/deleteIconExpense/:id", deleteIconExpense)

module.exports = customIconRouter