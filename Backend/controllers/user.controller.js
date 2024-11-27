const userModel = require("../models/User.Model");
const userService = require("../services/user.service");
const {validationResult} = require("express-validator");    
module.exports.registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const hashPassword = await userModel.hashPassword(password);

  const { name, email, password } = req.body;

  
    const user = await userService.createUser(req.body);
     const token = user.generateAuthToken();

    res.status(201).json({token, user});
     
};