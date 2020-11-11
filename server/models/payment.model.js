const mongoose = require('mongoose');

const payment = mongoose.Schema({
    
    customer: String,
    price : {
        type:Number,
        default:60000
    },
    quantity:{
        type:Number,
        default:1
    },
    
   

    
   
})

module.exports = mongoose.model('payment',payment)