const UserController = require('../api/controllers/user.controller');
const express = require('express');
const router = express.Router();
const Path = require('./../constants/path');

router.get(Path.getAllUsers, UserController.getAllUsers);
router.get(Path.getUserById, UserController.getUserById);
router.post(Path.createUser, UserController.createUser);
router.put(Path.updateUser, UserController.updateUser);
router.delete(Path.deleteUser, UserController.deleteUser);


module.exports = router;