const userModel = require("../model/userModel")

const login = async (req, res) => {
    const { username, password } = req.body
    try {
        if (!username || !password) return res.send("please enter field")

        const user = await userModel.create({ username: username, password: password })
        return res.status(200).json({ user })
    } catch (error) {
        return res.status(500).json({ message: error })

    }
}

const getUserById = async (req, res) => {
    const { id } = req.params
    try {
        const user = await userModel.findById(id)
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({ message: error })
    }
}

module.exports = { login, getUserById }