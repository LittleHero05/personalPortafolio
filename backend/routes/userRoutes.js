const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.addUser);
router.put('/:id', userController.updateUserById);
router.delete('/:id', userController.removeUserById);
router.delete('/', userController.removeAllUsers);

module.exports = router;