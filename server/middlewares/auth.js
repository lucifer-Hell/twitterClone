const express=require('express')
const jwt=require('jsonwebtoken')
const User=require('../models/user')


async function isLoggedIn(req,res,next){
    if(req.headers.authorization===undefined) {
        let err={message:"Please login first",status:404}
        
        next(err)
    }else{
        try{
            let token=req.headers.authorization.split(' ')[1]
            if(token===null)
                    {
                        throw "Please login first"
                    }
            else{
                let decoded=jwt.verify(token,process.env.SECRET_KEY)
             
                let user = await User.findById(decoded._id)
                if(user===null) next({message:"Sorry no such user exits",status:"400"})
                else next()
            }

    }catch(err){
        if(err.message==='invalid token'){
            next({message:"Please login first",status:"404"})
        }
        else next(err)
    }

    }
  
    
}

async function isCorrectUser(req,res,next){
    let userId=req.params.id
    // verify with token id matches or not
    try{
        let token=req.headers.authorization.split(' ')[1]
        //decode the token
        let decoded=jwt.verify(token,process.env.SECRET_KEY)
        // check if decoded id matches or not
        if(decoded._id===userId) next()
        else {
            next({
                message:"You cannot delete this message "
                ,status:400
            })
        }

    }catch(err){
            next(err)
    }

}


module.exports={isLoggedIn,isCorrectUser};