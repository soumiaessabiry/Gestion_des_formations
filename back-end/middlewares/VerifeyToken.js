const jwt=require("jsonwebtoken")
const SECRET=process.env.SECRET
const  ls=require('local-storage');

const verifyToken=async(req,res,next)=>{
    const token=ls.get("token")
    if(!token){
         res.json("access rejected .. ")
    }else{
        const decode_token=jwt.verify(token,SECRET)
        if(!decode_token){
            res.json(" wrong token ")
        }else{
            req.User=decode_token
            next()
        }
        

    }
}
module.exports=verifyToken