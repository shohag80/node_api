const express = require('express');
const { signup, login } = require('../controllers/userController');
const router = express.Router();

// Signup route
router.post('/api/v1/user/signup', signup);

// Login route
router.post('/api/v1/user/login', login);

module.exports = router;
