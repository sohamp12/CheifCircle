const express = require( 'express')
const app = express()
const dotenv = require("dotenv").config()
const connectDB = require("./config/connection")
const cors = require("cors")
const PORT = process.env.PORT || 3000
connectDB()
app.use(express.json())
app.use(cors())
app.use(express.static("public"))
app.use("/recipe",require("./routes/recipe"))
app.use("/",require("./routes/user"))

app.listen(PORT,(err)=>{
    console.log(`app is lisiting on port ${PORT}`)
})