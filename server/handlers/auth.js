const express=require('express');
const {User}=require('../models')

 async function signUp(req,res,next){
    
    let name=req.body.name
    let email=req.body.email
    let password=req.body.password
    let profileImg=req.body.img;
    try {
       let user= new   User({userName:name,userEmail:email,userPassword:password,userProfileImg:profileImg})
        let response= await user.save()
        res.status(200).json(response)
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


module.exports={signUp};