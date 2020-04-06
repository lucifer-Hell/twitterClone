const express=require('express')
const mongoose=require('mongoose')
const User=require('./user.js')
// message schema
const messageSchema=mongoose.Schema({
    text:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true
    }

})

// we also have to make pre schema so that it saves data
//in  user db also
messageSchema.pre('save',async function(next){
    try{
            // get the user
           let user= await User.findById(this.user)
            if(user===null) throw "User could not be found"
            // update the user
            user.messages.push(this.text);
            let saved=await user.save()
            if(saved) next()
            else throw "Changes could not be resolved"
    }catch(err){
        next(err)
    }
})
// make model
const Msg=mongoose.model('Msg',messageSchema);

// export it
module.exports=Msg;