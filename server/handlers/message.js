// this will handle new message addtion to message db
// first get the params 
const express=require('express')
const Msg=require('../models/messages')
// api/user/:id/message/

function createNewMesssage(req,res,next){
    try{
        let userId=req.params.userId
        // create document from model
        let msg=new Msg({text:req.body.text,user:userId})
        if(msg===null) throw "Unable to make user"
        let sucess=await msg.save()
        res.status(200).json(sucess);

    }catch(err){
        next(err)
    }
       

}