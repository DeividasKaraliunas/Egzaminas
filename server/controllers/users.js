const UserModel = require('../models/UserModel');

const getUsers = async (req, res) => {
    try {
        const DBUsers = await UserModel.find();
        res.send(200).json({ users: DBUsers })
    } catch (error) {
        res.send(404).json({ message: error.message })
    }
};

const postUser = (req, res) => {
    res.send(200).json('POST')
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