const express = require('express');
const { createIncome, createExpense, getIncomes, getExpenses, deleteIncomeById, deleteExpensesById, updateIncomeById, updateExpanseById } = require('../controller/customInputController');


const customInputRouter = express.Router()

customInputRouter.post("/createIncome", createIncome)
customInputRouter.post('/createExpense', createExpense);
customInputRouter.get('/getIncome', getIncomes)
customInputRouter.get('/getExpense', getExpenses)
customInputRouter.delete('/deleteIncome/:id', deleteIncomeById)
customInputRouter.delete('/deleteExpense/:id', deleteExpensesById)
customInputRouter.patch("/updateIncome/:id", updateIncomeById)
customInputRouter.patch("/updateExpense/:id", updateExpanseById)


module.exports = customInputRouter;