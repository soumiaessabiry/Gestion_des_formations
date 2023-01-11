const AdminMiddleware=async(req,res,next)=>{
    if(req.User.Role!="Admin"){
        res.status(403).json("you are not Admin user ")
    }else{
        next()
    }
    

}
module.exports=AdminMiddleware