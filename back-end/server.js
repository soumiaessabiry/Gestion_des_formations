const express=require("express")
const app=express()
const dotenv=require('dotenv').config()

const port=process.env.port
const bodyparser=require("body-parser")

const db=require("./Config/database")
const Auth=require('./Routes/AuthRoute')
const AdminRoute=require('./Routes/AdminRoute')
const EmployeeRoute=require("./Routes/EmployeeRoute")

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/auth',Auth)



app.listen(port,()=>{console.log(`Server running  in port ${port}`)})
module.exports= app






