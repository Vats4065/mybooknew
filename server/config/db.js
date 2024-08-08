const mongoose = require('mongoose')

const db = async () => {
    await mongoose.connect("mongodb+srv://counter:counter@cluster0.lkuazwm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log("connected");
}

module.exports = db