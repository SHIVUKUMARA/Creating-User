const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, "name is required"]
    },
    email:{
        type: String,
        unique: true,
        required:[true, "email is required"]
    },
    password:{
        type: String,
        required:[true, "password is required"]
    },
    isAdmin:{
        type: Boolean,
        default:false
    }
}, {timestamps:true})

const User = mongoose.model("User", userSchema)

module.exports = User