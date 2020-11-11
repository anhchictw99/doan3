require('dotenv').config();
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const relative = mongoose.Schema({
    name: String,
    email: String,
    createDay:{
         type: Date, expires: 3600, default: Date.now },
    role:{
        type:String,default:'relative'
    },
    random: {type:Number,default:undefined}  
})
// relative.pre("save", async function(next) {
//     // try {
//     //     if (!this.isModified("random")) {
//     //       return next();
//     //     }
//         // Step 1
// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.EMAIL ,
//         pass: process.env.PASSWORD 
//     }
// });

// // Step 2
// let mailOptions = {
//     from: process.env.EMAIL, // TODO: email sender
//     to: this.email, // TODO: email receiver
//     subject: 'CODE',
//     text: this.random
// };

// // Step 3
// transporter.sendMail(mailOptions, (err, data) => {
//     if (err) {
//         return console.log('Error occurs');
//     }
//     return console.log('Email sent!!!');
// });
//         return next();
// //     } catch (err) {
// //         return next(err);
// //    } 
// });
relative.methods.checkRelativeModel = function(){
  
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL ,
            pass: process.env.PASSWORD 
        }
    });
    
    // Step 2
    let mailOptions = {
        from: process.env.EMAIL, // TODO: email sender
        to: this.email, // TODO: email receiver
        subject: 'CODE',
        text: this.random.toString()
    };
    
    // Step 3
    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            return console.log('Error occurs');
            
        }else{
           return console.log('Email sent!!!');
           

        }
        
    });

}
module.exports = mongoose.model('relative',relative)