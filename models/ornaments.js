const mongoose = require("mongoose") 
const ornamentsSchema = mongoose.Schema({ 
OrnamentType: String, 
OrnamentCost: Number, 
OrnamentStrength: String
}) 
 
module.exports = mongoose.model("Ornaments",ornamentsSchema) 