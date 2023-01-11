const EmplyeeMiddleware=async(req,res,next)=>{
    if(req.User.Role!="employee"){
        res.status(403).json("you are not employee user ")
    }else{
        next()
    }
    

}
module.exports=EmplyeeMiddleware