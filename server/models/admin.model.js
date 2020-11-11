const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const adminMain = mongoose.Schema({
    
    userAdmin:String,
    password:String,
    role:{
        type:String, default:"admin"
    }
})
adminMain.pre("save", async function(next) {
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

module.exports = mongoose.model('adminMain',adminMain)