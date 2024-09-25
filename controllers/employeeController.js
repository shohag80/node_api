const Employee = require('../models/Employee');

// Get all employees
const getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
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

// Get employee by ID
const getEmployeeById = async (req, res) => {
    const { eid } = req.params;
    try {
        const employee = await Employee.findById(eid);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Update employee by ID
const updateEmployeeById = async (req, res) => {
    const { eid } = req.params;
    const { name, position, department, salary } = req.body;

    try {
        const employee = await Employee.findByIdAndUpdate(eid,
            { name, position, department, salary },
            { new: true, runValidators: true } // Return the updated employee and ensure validation
        );

        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }

        res.status(200).json({ message: 'Employee updated successfully', employee });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Delete employee by ID
const deleteEmployeeById = async (req, res) => {
    const { eid } = req.query;

    try {
        const employee = await Employee.findByIdAndDelete(eid); // Find and delete employee by ID

        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }

        res.status(204).json({message: 'Employee deleted successfully.'}); // Return 204 No Content if deleted successfully
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports = { getAllEmployees, createEmployee, getEmployeeById, updateEmployeeById, deleteEmployeeById };
