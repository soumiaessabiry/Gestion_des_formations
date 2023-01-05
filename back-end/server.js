const express=require("express")
const app=express()
const dotenv=require('dotenv').config()
const port=process.env.port
const bodyparser=require("body-parser")
const db=require("./Config/database")

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const Auth=require('./Routes/AuthRoute')
const AdminRoute=require('./Routes/AdminRoute')

app.use('/api/auth',Auth)
app.use('/api/admin',AdminRoute)
app.all('*',(req,res,next)=>{
   res.send("Page note found !!!")

})




app.listen(port,()=>{console.log(`Server running  in port ${port}`)})
module.exports= app






