const User = require('../models/userModel');
const bcrypt = require('bcryptjs');


exports.signUp = async (req, res) => {


  try {
    const {username, password} = req.body;
    const hashPassword = await bcrypt.hash(password, 12);

    const newUser = await User.create({
        username: username,
        password: hashPassword
    })
    req.session.user = user;
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

exports.login = async (req, res) => {

   
  try {
    const {username, password} = req.body;
    const user = await User.findOne({username});

    if(!user) {
        res.status(204).send({
            status: "fail",
            message: "user not found"
        });
    }

    const isCorrect = await bcrypt.compare(password, user.password);

    if(isCorrect){
        req.session.user = user;
        res.status(200).send({
            status : "success"
        });
    }else{
        res.status(401).send({
            status : "Incorrect"
        });
    }
    

  } catch (error) {
        res.status(500).send({
            status: "failed"
        });
  }  
};