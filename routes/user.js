const express = require('express');
const User = require('../models/User');
const router = express.Router();

// POST /api/v1/user/signup
router.post('/signup', async (req, res) => {
    const { username, password, email } = req.body;

    try {
        const newUser = new User({ username, password, email });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        res.status(400).json({ message: 'Error creating user', error });
    }
});

module.exports = router;
