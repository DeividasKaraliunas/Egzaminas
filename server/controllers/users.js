const getUsers = (req, res) => {
    res.send(200).json('GET')
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