const userModel = require("../models/User.Model");

module.exports.createUser = async ({name, email, password}) => {
    if(!name || !email || !password) throw new Error("All fields are required");
    const user = new userModel.create({name, email, password});
    return user;
};