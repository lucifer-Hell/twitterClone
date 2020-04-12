const express=require('express');
const {User}=require('../models')
const jwt=require('jsonwebtoken')
 async function signUp(req,res,next){
    
    let name=req.body.name
    let email=req.body.email
    let password=req.body.password
    let profileImg=req.body.profileImg;
    try {
       let user= new   User({userName:name,userEmail:email,userPassword:password,userProfileImg:profileImg})
        let {userName,_id,userProfileImg}= await user.save()
        
        let token=jwt.sign({userName,_id,userProfileImg},process.env.SECRET_KEY)
        res.status(200).json({token:token,userName:userName,id:_id,userProfileImg:userProfileImg})
    }
    catch(err){

        // remember functions can still proceed further after using next also
        if(err.code===11000){
            
            err.message="Sorry username or email is already taken"
            
            next({
                status:400,
                message:err.message
            })
        }else next(err)
    }

}
async function logIn(req,res,next){
    let email=req.body.email
    let password=req.body.password
    try{
        
        let user = await User.findOne({userEmail:req.body.email})      
       if(user!==null){
           // if user exists then only validate 
           let valid =await user.validatePassword(req.body.password)
           if(valid){
              // if user is correct
             // send jwt token
            
             let {userName,_id,userProfileImg}=user
             
             let token=jwt.sign({userName,_id,userProfileImg},process.env.SECRET_KEY)
             res.status(200).json({token:token,userName:userName,id:_id,userProfileImg:userProfileImg})
             
            
     
           }else {
               let passwordErr=new Error("Invalid password try again !")
               passwordErr.status=404
               throw passwordErr
           }
       }
       else {
           let userErr=new Error("Invalid userName")
           userErr.status=404
           throw userErr

       }
     
      
    }catch(err){
            
            next(err)
    }
    
   
    

}

module.exports={signUp,logIn};