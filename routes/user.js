const express = require('express');
const { signup, login } = require('../controllers/userController');
const { getAllEmployees, createEmployee } = require('../controllers/employeeController');
const router = express.Router();

// Signup route
router.post('/api/v1/user/signup', signup);

// Login route
router.post('/api/v1/user/login', login);

// Route to get all employees
router.get('/api/v1/emp/employees', getAllEmployees);

// Route to create employee
router.post('/api/v1/emp/employees', createEmployee);

module.exports = router;
