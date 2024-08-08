const express = require('express');
const { login, getUserById } = require('../controller/userController');

const userRouter = express.Router()

userRouter.post("/login", login)
userRouter.get("/getUserById/:id", getUserById)

module.exports = userRouter;