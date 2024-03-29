const express = require('express');
const userController = require('../controller/userController');
const router = express.Router();
router.get('/',userController.user);
router.post('/signIn',userController.signIn);
router.post('/register',userController.register);
module.exports = router;