const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const user = mongoose.Schema({
    username: String,
    password: String,
    question1: {
        type:String,default:undefined
    },
    question2: {
        type:String,default:undefined
    },
    question3: {
        type:String,default:undefined
    },
    role:{
        type:String, default:"user"
    },
    will:{
        type:String , default:"test"
    },
    state:{
        type:String,default:"no"
    },
    email:{
        type:String
    },
    phone:{
        type:Number, default:0123
    }
});
user.pre("save", async function(next) {
    try {
        if (!this.isModified("password")) {
          return next();
        }
        let hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
        return next();
    } catch (err) {
        return next(err);
   } 
});
module.exports = mongoose.model('user',user)