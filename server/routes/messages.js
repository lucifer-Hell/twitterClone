const express=require('express')
const router=express.Router({mergeParams:true})
const msgHandler=require('../handlers/messages')
const createNewMessage=msgHandler.createNewMesssage
const displayMessage=msgHandler.displayMessage
const deleteMessage=msgHandler.deleteMessage;
const {isLoggedIn,isCorrectUser}=require('../middlewares/auth')

router.route('/:id/message')
.post(isLoggedIn,isCorrectUser,createNewMessage)
.delete(isLoggedIn,isCorrectUser,deleteMessage)
router.route('/').get(displayMessage)



module.exports=router
