const express = require('express');
const router = express.Router(); 
const auth = require('../middleware/auth');
const { check, validationResult } = require("express-validator/check");

const User = require("../models/User");

// @route        GET api/time
// @desc         GET all users time
// @access       Private
router.get('/', (req, res) => {
    res.send('Get users logged time'); 
}); 

// @route        POST api/time
// @desc         Add users time
// @access       Private
router.post('/', (req, res) => {
    res.send('Add time'); 
}); 

// @route        PUT api/time/:id
// @desc         Update time
// @access       Private
router.put('/:id', (req, res) => {
    res.send('Update users logged time'); 
}); 

// @route        DELETE api/time/:id
// @desc         Delete time
// @access       Private
router.put('/:id', (req, res) => {
    res.send('Delete time'); 
}); 

module.exports = router; 