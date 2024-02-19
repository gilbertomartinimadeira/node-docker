const User = require('../models/userModel');

exports.signUp = async (req, res) => {
  try {
    const newUser = await User.create(req.body)
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