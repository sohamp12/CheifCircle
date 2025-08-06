const mongoose = require('mongoose')
const recipeSchema = mongoose.Schema({
title:{
    type:String,
   
},
ingredients:{
    type:Array,
   
},
instructions:{
    type:String,
  
},
time:{
    type:String,
    
},
coverImage:{
    type:String,
    
},
createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user"
}



},{timestamp:true})
module.exports= mongoose.model("Recipe",recipeSchema)