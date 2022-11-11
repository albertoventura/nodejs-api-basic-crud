const { Users }  = require('./../user.mock.js');
const GeneralHelper = require('./../../helpers/general');

async function GetAllUsers() {
    return await Users;
}

const getUserById = async (id) => {
    const i = Users.findIndex(user => user.id == id)
    const user = Users[i];
    return user ? user : false;
}

const createUser = async (username) => {
    const newuser = {
        id: GeneralHelper.generateNewId(),
        name: username,
    }
    Users.push({
        id: newuser.id,
        name: newuser.name,
    });
    return newuser;
}

const updateUser = async (id, name) => {
    const i = _getIndexOf(id);
    if(i) {
        Users[i].name = name;
        return Users[i];
    }
    return false;
}

const deleteUser = async (id) => {
    const user = getUserById(id);
    if(user){
        const i = _getIndexOf(id);
        Users.splice(i, 1);
        return user;
    }
    return false;
}

const _getIndexOf = (id) => {
    return Users.findIndex( user => user.id == id);
}

module.exports = {
    GetAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
}