
var express = require('express')
var router = express.Router()
var User = require('../models/user.model');
var Relative = require('../models/relative.model');
const jwt = require("jsonwebtoken");
var middlewareJwt = require('../middlewares/jwt.middleware')
var random = require('random');
router.get('/api',(req,res)=>{
    var x = {mess:"chan"}
    res.send(x)
})
// router.post('/signinRelative',(req,res)=>{
//     var relative = new Relative({
//         name: req.body.name,
//         email: req.body.email
//     })
//     relative.save()
//     .then(result =>{
//         console.log(result)
//         res.status(201).json({message:result})
//     })
// })
// router.post('/checkRelative',(req,res)=>{
//     var relative = new Relative({
//         name: req.body.name,
//         email: req.body.email
//     })
//     relative.save()
//     .then(result =>{
//         console.log(result)
//         User.findOne({username:req.body.userT})
//         .then(kq=>{
//             var random1 = {random:random.int(0, 100)}
//             if(kq){
//                 if(kq.question1 == req.body.questionare || kq.question2 == req.body.questionare || kq.question3 == req.body.questionare){
//                     Relative.updateOne({email:result.email},{$set:random1},function(err){
//                         if(err){
//                             console.log(err);
//                         }else{
//                             res.status(201).json({message:'thanh cong checkRelative'})
//                         }
//                     })
//                 }
//             }
//         }).catch(err=>{console.log(err);
//             res.status(401).json({message:'loi phan checkRelative'})
//         })
//         res.status(201).json({message:result})
//     })
// })
router.post('/login',(req,res)=>{
    
        User.findOne({username:req.body.userT})
        .then(kq=>{
            
            
                if(kq.question1 == req.body.questionare || kq.question2 == req.body.questionare || kq.question3 == req.body.questionare){       
                            var relative = new Relative({
                                name: req.body.name,
                                email: req.body.email,
                                random: random.int(0, 100)
                            })
                            relative.save().then(kq=>{
                                console.log(kq);
                                kq.checkRelativeModel();
                                const token = jwt.sign(
                                    {
                                      name: kq.name,
                                      userId: kq._id,
                                      role: kq.role
                                    },
                                    process.env.JWT_KEY,
                                    {
                                        expiresIn: "1h"
                                    }
                                    
                                  );
                                  return res.status(200).json({
                                    message: "Auth successful",
                                    token: token
                                  });
                               


                            })
                            .catch(err=>console.log(err))
                            
                        //   res.status(201).json({message:'thanh cong checkRelative'})
                  
                }
            
        }).catch(err=>{console.log(err);
           return  res.status(401).json({message:'loi phan checkRelative'})
        })
        
    })

router.post('/authRelative',middlewareJwt,(req,res)=>{

    Relative.findOne({_id:req.userData.userId})
    .then(kq=>{
        if(kq.random == req.body.random){
            res.status(201).json({message:'success'})
        }
        return res.status(401).json({err:'fail'})

    })
    .catch(err=>{
        console.log(err)
        return res.status(401).json({err:'fail'})
    })
   

    


})
// router.post('/checkQuestionare',(req,res)=>{
//     User.findOne({username:req.body.userT})
//     .then(kq=>{
//        if(kq.question1 == req.body.questionare || kq.question2 == req.body.questionare || kq.question3 == req.body.questionare) {
//         var relative = new Relative({
//             email: req.body.email,
//             name: req.body.name,
//             random: random.int(0, 100)
//         })
//         relative.save()
//         .then(result =>{
//             console.log(result);
//             // Step 1
// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.EMAIL,  // TODO: your gmail account
//         pass: process.env.PASSWORD// TODO: your gmail password
//     }
// });

// // Step 2
// let mailOptions = {
//     from: process.env.EMAIL, // TODO: email sender
//     to: result.email, // TODO: email receiver
//     subject: 'code nguoi than',
//     text: result.random
// };

// // Step 3
// transporter.sendMail(mailOptions, (err, data) => {
//     if (err) {
//         return log('Error occurs');
//     }
//     return log('Email sent!!!');
// });
// const token = jwt.sign(
//     {
//       name: user.username,
//       userId: user._id,
//       role: user.role
//     },
//     process.env.JWT_KEY,
//     {
//         expiresIn: "1h"
//     }
//   );

//             res.status(201).json({
//                 message: "Relative created",
//                 token: token
//               });
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json({
//               error: err
//             });
//           });
//        }

//     })
    
  
   
// })
module.exports = router;