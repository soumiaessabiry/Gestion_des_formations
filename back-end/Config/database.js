
const mongoose=require("mongoose")
const dotenv=require('dotenv')
mongoose.connect(process.env.Connect_db,{useNewUrlParser: true},()=>{console.log('connected with databse is success ')})
module.exports=mongoose