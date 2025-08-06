const mongoose = require("mongoose")
const connectDB = async()=>{
    await mongoose.connect(process.env.connection_string)
    .then(()=>console.log("connnected to mongo DB database.."))
}
module.exports = connectDB