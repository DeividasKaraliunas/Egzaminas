const UserModel = require('../models/UserModel');

const getUsers = async (req, res) => {
    try {
        const DBUsers = await UserModel.find();
        res.send(200).json({ users: DBUsers })
    } catch (error) {
        res.send(404).json({ message: error.message })
    }
};

const postUser = async (req, res) => {
    const { name, age, email, password } = req.body;
    try {
        const newUser = await UserModel.create({ name, age, email, password });
        res.send(200).json({
            user: {
                id: newUser.id,
                name: newUser.name,
                age: newUser.age,
                email: newUser.email,
                password: newUser.password
            }
        })
    } catch (error) {
        res.send(404).json({ message: error.message })
    }
};

const updateUser = (req, res) => {
    res.send(200).json('UPDATE')
};

const deleteUser = (req, res) => {
    res.send(200).json('DELETE')
};

module.exports = {
    getUsers,
    postUser,
    updateUser,
    deleteUser
}