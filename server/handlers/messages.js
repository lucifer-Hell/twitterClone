// this will handle new message addtion to message db
// first get the params 
const express=require('express')
const Msg=require('../models/messages')
// api/user/:id/message/

async function createNewMesssage(req,res,next){
    try{

        let userId=req.params.id
        
        // create document from model
        let msg=new Msg({text:req.body.text,user:userId})
        if(msg===null) throw "Unable to make user"
        let sucess=await msg.save()
        res.status(200).json(sucess);

    }catch(err){
        next(err)
    }
       

}
async function displayMessage(req,res,next){
    try{
        let data= await Msg.find().populate("user","userName userProfileImg","User")
               if(data===null) throw "Data couldn ot be loaded server error"
        else {
            res.status(200).json(data)
        }
    }   catch(err){
            next(err)
    }
}

async function deleteMessage(req,res,next){

    try{

        let userId=req.params.id
        // create document from model
        let msg= await Msg.deleteOne({text:req.body.text,user:userId})
        console.log(msg)
        if(msg.deletedCount===0){
            next({
                message:"Oops your are not authorized to delete this message or message doesnot exists",
                status:"400"
            })
        }
        else res.status(200).json(msg);

    }catch(err){
        next(err)
    }
       
}


module.exports={createNewMesssage:createNewMesssage,displayMessage:displayMessage,deleteMessage};
