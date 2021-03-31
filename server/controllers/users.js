const UserModel = require('../models/UserModel');

const getUsers = async (req, res) => {
    try {
        const DBUsers = await UserModel.find();
        res.status(200).json({ users: DBUsers })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};

const postUser = async (req, res) => {
    const { name, age, email, password } = req.body;
    try {
        const newUser = await UserModel.create({ name, age, email, password });
        res.status(200).json({
            user: {
                id: newUser.id,
                name: newUser.name,
                age: newUser.age,
                email: newUser.email,
                password: newUser.password
            }
        })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};

const updateUser = async (req, res) => {
    const { id } = req.params
    try {
        const updatedUser = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({
            user: updatedUser
        });
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};

const deleteUser = async (req, res) => {
    const {id} = req.params;
    try{
const deletedUser = await UserModel.findByIdAndDelete(id);
        res.status(200).json({
            user: {
                id: deletedUser.id,
                name: deletedUser.name,
                age: deletedUser.age,
                email: deletedUser.email,
                password: deletedUser.password
            }
        })
    }catch(error){
        res.status(404).json({ message: error.message })
    }
};

module.exports = {
    getUsers,
    postUser,
    updateUser,
    deleteUser
}