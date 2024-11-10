const adminAuth=(req,res,next)=>{
    console.log("admin Auth ")
    const token="xyz"
    const isAdminAuthorized =token==="xyz";
    if(!isAdminAuthorized){
      res.status(401).send("Unauthorized")
      //it will stop the execution of further middleware and the route handler
    }else{
     next();
    }
  }

  const userAuth=(req,res,next)=>{
    console.log("user Auth ")
    const token="xyz"
    const isAdminAuthorized =token==="xyz";
    if(!isAdminAuthorized){
      res.status(401).send("Unauthorized")
      //it will stop the execution of further middleware and the route handler
    }else{
     next();
    }
  }

module.exports = {adminAuth,userAuth}