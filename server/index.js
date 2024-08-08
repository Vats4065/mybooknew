const express = require('express')
const db = require('./config/db')
const cors = require('cors')
const customInputRouter = require('./routes/customeInputRouter')
const customIconRouter = require('./routes/customIconRouter')
const singleIconRouter = require('./routes/singleIconRouter')
const userRouter = require('./routes/userRouter')
const app = express()


app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.use('/', express.static(__dirname + '/uploads'))


app.use("/api/customInput", customInputRouter)
app.use("/api/customIcon", customIconRouter)
app.use("/api/singleIcon", singleIconRouter)
app.use("/api/user", userRouter)

app.listen(8080, () => {
    db()
    console.log("listening on port 8080");
})