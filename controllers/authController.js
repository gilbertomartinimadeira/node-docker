const User = require('../models/userModel');
const bcrypt = require('bcryptjs');


exports.signUp = async (req, res) => {

    const {username, password} = req.body;
    const hashPassword = await bcrypt.hash(password, 12);

  try {
    const newUser = await User.create({
        username: username,
        password: hashPassword
    })
    res.status(201).send({
        status : "success",
        data: {
            user: newUser
        }
    });

  } catch (error) {
        res.status(500).send({
            status: "failed"
        });
  }  
};