
var express = require('express')
var router = express.Router()
var User = require('../models/user.model')
var Admin = require('../models/admin.model')
var Payment = require('../models/payment.model')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
var middlewareJwt = require('../middlewares/jwt.middleware')
router.post('/login',(req,res)=>{
    User.findOne({ username: req.body.username })
    
    .then(user =>{
        bcrypt.compare(req.body.password, user.password, (err, result) => {
            if (result) {
                const token = jwt.sign(
                    {
                      name: user.username,
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
            else {
              return res.status(401).json({err:'loi'})
            }
        //    return res.status(401).json({
        //       message: "Auth failed"
        //     });
          }); 
    }).catch(err=>{console.log(err);
        res.status(401).json({err:'loi'})
    })
})
router.post('/register',(req,res)=>{
    var user = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        phone:req.body.phone,
        question1:req.body.question1,
        question2:req.body.question2,
    })
    user.save()
    
    .then(result =>{
        console.log(result);
        res.status(201).json({
            message: "User created"
          });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
})
router.post('/createWill',middlewareJwt,(req,res)=>{
    var item = {will:req.body.will}

    // User.updateOne({_id:req.userData.userId},{$set: item},function(err){
    //     if(err){
    //       console.log(err);
    //     return  res.status(401).json({err})
    //     }
              
    //     return  res.status(201).json({message:'success'})
          
    //   })
    User.updateOne({_id:req.userData.userId},{$set: item},function(err){
            if(err){
              console.log(err);
            return  res.status(401).json({err})
            }
                  
            return  res.status(201).json({message:'success'})
              
          })
   
       
})
router.get('/showWill',middlewareJwt,(req,res)=>{
    if(req.userData.role=="user" || req.userData.role=="relative"){
        User.findOne({_id:req.userData.userId})
      .then(result =>{
          console.log(result)
          res.status(201).json({message:result.will})
      })
      .catch(err=>{
          console.log(err)
          res.status(401).json({err})
      })

    }else
    {
        return res.status(401).json({err:'fail'})
    }
      
})
router.delete('/showWill/:id',middlewareJwt,(req,res)=>{
    User.findOneAndDelete({_id:req.params.id},(err)=>{
        if(err){
            console.log(err)
           return res.status(401).json({err})
        }
        return res.status(201).json({message:'success'});
    })
    
})
router.get('/order',middlewareJwt,(req,res)=>{
    if(req.userData.role=="user"){
        User.find({_id:req.userData.userId})
    .then(result=>{
        console.log(result)
        var order = {will: result.will,username:result.username}
        res.status(201).json({order})
    })
    .catch(err=>{console.log(err)
        res.stutus(401).json({err})
    })
    }
    return res.status(401).json({err:'err'})
    
})
router.post('/pay',middlewareJwt,(req,res)=>{
    var state = {state:"yes"}
    var payment = new Payment({
        customer : req.body.customer
    })
    if(req.userData.usrId=='user'){
        payment.save()
    .then(result =>{
        User.updateOne({_id:req.userData.userId},{$set: state},function(err){
            if(err){
                console.log(err);
                res.status(401).json({error:'loi'})
            }
            res.status(201).json({message:result})
    
        })
    })
    }
    return res.status(401).json({err:'err'})
    
})








module.exports = router