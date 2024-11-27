const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    
},{timestamps: true});

UserSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
    return token;
}
UserSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}
UserSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10);
}
const userModel = mongoose.model("User", UserSchema);
module.exports = userModel;