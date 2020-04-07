const express=require('express')
const mongoose=require('mongoose')
mongoose.Promise=Promise;
console.log("Message model loaded")
const User=require('./user')

// message schema
const messageSchema=mongoose.Schema({
    text:{
        type:String,
        required:true,
        unique:true
    },
    user:{
        type:String,
        ref:"User",
        required:true
    }

})

// we also have to make pre schema so that it saves data
//in  user db also


messageSchema.pre('save',async function(next){
    try{
            // get the user
         
           let result= await User.findById({_id:this.user})
            if(result===null) throw "User could not be found"
            // update the result
            
             result.messages.push(this.text);
            let saved=await result.save()
            if(saved) next()
            else throw "Changes could not be resolved"
    }catch(err){
        next(err)
    }
})

messageSchema.pre('deleteOne',async function(next){
    try{    
        console.log(this._conditions)
        let user=await User.findOne({_id:this._conditions.user})
        
        let newMessages=user.messages.filter((msg)=>{
             return (!(msg===this._conditions.text))
               
        })

         user.messages=newMessages
        user.save();
      
        next();
    }catch(err){
        next(err)
    }
})


// make model
const Msg=mongoose.model('Msg',messageSchema);

// export it
module.exports=Msg;