const express=require("express")
const app=express()
const dotenv=require('dotenv').config()
const port=process.env.port
const bodyparser=require("body-parser")
const multer=require ('multer') 
const db=require("./Config/database")
const path = require('path')



app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"images")))

const Auth=require('./Routes/AuthRoute')
const formationRoute=require('./Routes/AdminRouter/FormationRoute')
const organismeRoute=require('./Routes/AdminRouter/OrganismRoute')
const adduserRoute=require('./Routes/AdminRouter/UserRoute')

app.use('/api/auth',Auth)
app.use('/api/formation',formationRoute)
app.use('/api/organisme',organismeRoute)
app.use('/api/user',adduserRoute)
app.all('*',(req,res,next)=>{
   res.send("Page note found !!!")

})




app.listen(port,()=>{console.log(`Server running  in port ${port}`)})
module.exports= app






