import apiCall from '../../services/api'
import {GET_MESSAGES,ADD_MESSAGE,REMOVE_MESSAGE} from '../actionTypes'

function getMessages(userPosts){
    return ({type:GET_MESSAGES,userPost:userPosts})
}
function addMessage(newMsg){
    return ({type:ADD_MESSAGE,newMsg})
}
function removeMessage(msgId){
    return ({type:REMOVE_MESSAGE,msgId})
}

function handlePosts(task,data){
   
   return   (dispatch)=>{

           /// data object would be like
                    // data:{
                    //     userDetails:{id,token}
                    //     text:{message}
                    // }
   
        
        let header={"Authorization":`Bearer ${data.userDetails.token}`}
        if(task==="addPost"){
             
             console.log("calling api")
            let response= new Promise (async(resolve,reject)=>{
                
                try{
                    let msg ={text:data.text}
                let fetched=await apiCall("post",`/api/user/${data.userDetails.id}/message`,msg,header)
                    resolve(fetched)

                }catch(err){
                    reject(err)
                }
                
                
            })
            response.then((data)=>{
                console.log("recived data "+data)
            }).catch((err)=>{
                console.log(err)
            })

       }

       
    }
}

export default handlePosts;