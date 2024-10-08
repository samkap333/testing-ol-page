const express= require('express');
const Users = require('../models/user');
const router = express.Router();





router.post('/contact-info-user', async (req, res) => {
  
    const register = new Users(req.body);
    await register.save();
    res.status(201).send(register);
  }
);

  
module.exports = router;