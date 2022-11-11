const UserService = require('../services/user.service');
const StatusMessage = require('./../../constants/statusMessage');


const getAllUsers = async (req, res) => {
    try {

      const response = await UserService.GetAllUsers();
      return res.status(201).json(response);
      
    } catch (e) {
      return res.status(400).send(e);
    }
};
const getUserById = async (req, res) => {
    try {

      const { id } = req.params;
      const response = await UserService.getUserById(id);

      if (response){
        return res.status(201).json(response)
      }

      return res.status(400).send(StatusMessage.userNotfound);

    } catch (e) {
      return res.status(400).send(e);
    }
};
const createUser = async (req, res) => {
    try {

      const { name } = req.body;
      const response = await UserService.createUser(name);

      if ( response ){
        return res.status(201).json(response);
      }

      return res.status(400).send(StatusMessage.userCreatedError);

    } catch (e) {
      return res.status(400).send(e);
    }
};

const updateUser = async (req, res) => {
    try {

      const { id } = req.params;
      const { name } = req.body;
      const response = await UserService.updateUser(id, name);

      if ( response ) {
        return res.status(201).json(response);
      }

      return res.status(400).send(StatusMessage.userNotfound);

    } catch (e) {
      return res.status(400).send(e);
    }
};
const deleteUser = async (req, res) => {
    try {

      const { id } = req.params;
      const response = await UserService.deleteUser(id);

      if ( response ) {
        return res.status(201).json(response);
      }

      return res.status(400).send(StatusMessage.userNotfound);

    } catch (e) {
      return res.status(400).send(e);
    }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}