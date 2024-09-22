const Employee = require('../models/Employee');

// Get all employees
const getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find(); // Retrieve all employee records from MongoDB
        res.status(200).json(employees); // Return the list of employees with a 200 status code
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Create Employee
const createEmployee = async (req, res) => {
    const { name, position, department, salary } = req.body;
    try {
        const newEmployee = new Employee({ name, position, department, salary });
        await newEmployee.save();
        res.status(201).json({ message: 'Employee created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}

module.exports = { getAllEmployees, createEmployee };
