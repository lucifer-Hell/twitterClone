const express=require('express')
const bcrypt=require('bcrypt')
const mongoose=require('mongoose')
mongoose.Promise=Promise;
//  user scheama

const userSchema=mongoose.Schema({
    userName:{
        type:"String",
        required:true,
        unique:true
    }, 
    userEmail:{
        type:"String",
        required:true,
        unique:true
    },
    userPassword:{
        type:"String",
        required:true,
        
    },
    userProfileImg:{
        type:"String"
        
    }},{timestamp:true})

// convert into model
const User=mongoose.model("User",userSchema)


// schemas must have a pre validator 
userSchema.pre('save', async function(next){
    // if user password is not modified
    // remember it case when its trying to change password again

            if(!this.isModified('userPassword')){
                next()
            }
       try{
            // convert the password
            let hashedPassword=await bcrypt.hash(this.userPassword,10);
            this.userPassword=hashedPassword;
            next();
                 }
     catch(err)
        {
            
             next(err)
    }
   
})

userSchema.methods.validatePassword= async function(givenPassword,next){
   try{
      
       let isVerified=await bcrypt.compare(givenPassword,this.userPassword)
       if(isVerified) next()
       else {
           let err=new Error("Invalid user id or password")
           err.status(404);
           next(err);
       }
   } 
   catch(err)
   {
        
        
       next(err);
   }
}




module.exports=User;
