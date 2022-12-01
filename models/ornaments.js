const mongoose = require("mongoose") 
const ornamentsSchema = mongoose.Schema({ 
OrnamentType:{
    type:String,
    enum:["Gold","Diamond","Silver","Platinum"]
} , 
OrnamentCost: {
    type:Number,
    min:1000,
    max:10000
},
    
OrnamentStrength: String
}) 
 
module.exports = mongoose.model("Ornaments",ornamentsSchema) 