const express = require('express');
const { createSingleIconIncome, updateSingleIconIncomeById, getSingleIconIncomes, getSingleIconIncomeById, deleteSingleIconIncome } = require('../controller/singleIconController');

const singleIconRouter = express.Router();

singleIconRouter.post("/createSingleIcon", createSingleIconIncome)
singleIconRouter.patch("/updateSingleIcon", updateSingleIconIncomeById)
singleIconRouter.get("/singleIcon", getSingleIconIncomes)
singleIconRouter.get("/singleIcon/:id", getSingleIconIncomeById)
singleIconRouter.delete("/deleteSingleIcon", deleteSingleIconIncome)

module.exports = singleIconRouter;