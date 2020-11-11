var express = require('express')
var router = express.Router()
const jwt = require("jsonwebtoken");
var middlewareJwt = require('../middlewares/jwt.middleware')
var Admin = require('../models/admin.model');
var Payment = require('../models/payment.model');
const bcrypt = require('bcrypt');
router.get('/showcheckOut',middlewareJwt,(req,res)=>{
    Payment.aggregate([
        {
            $group: {
                _id: null,
                totalPrice: { $sum: "$price" },
                totalQuan: { $sum: "$quantity" }
            }
        }
    ]).then(kq =>{
        console.log(kq);
        return res.status(201).json({kq})
    })
    .catch(err=>{console.log(err)})
    
    
 
})
router.post('/loginAdmin',(req,res)=>{
   var admin = Admin({
    userAdmin : req.body.userAdmin,
    password: req.body.password
   })
   admin.save()
   .then(result =>{
       console.log(result)
       
       
       
   })
   .catch(err=>{
       console.log(err)
       res.status(401).json({err})
   })
 
})
router.post('/login',(req,res)=>{
    Admin.findOne({ userAdmin: req.body.userAdmin })
    
    .then(user =>{
        bcrypt.compare(req.body.password, user.password, (err, result) => {
            if (err) {
              return res.status(401).json({
                message: "Auth failed"
              });
            }
            if (result) {
              const token = jwt.sign(
                {
                  name: user.userAdmin,
                  userId: user._id,
                  role: user.role
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
            }
            res.status(401).json({
              message: "Auth failed"
            });
          });
    })
})
router.delete('/del/:id',middlewareJwt,(req,res)=>{
    // User.findOneAndDelete({_id:req.params.id},(err)=>{
    //     if(err){
    //         console.log(err)
    //        return res.status(401).json({err})
    //     }
    //     return res.status(201).json({message:'success'});
    // })

    if(req.userData.role =='admin'){
        Payment.findOneAndDelete({_id:req.params.id},(err)=>{
            if(err){c
                console.log(err)
                res.status(401).json({err:'fail'})
            }
            return res.status(201).json({message:'success'})

        })
    }else{
        res.status(401).json({err:'fail'})
    }
    
})
module.exports = router;