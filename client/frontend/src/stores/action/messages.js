import apiCall from '../../services/api'
import {GET_MESSAGES,ADD_MESSAGE,REMOVE_MESSAGE} from '../actionTypes'

function getMessages(userPosts){
    
    return ({type:GET_MESSAGES,userPosts:userPosts})
}
function addMessage(newMsg){
    return ({type:ADD_MESSAGE,newMsg})
}
function removeMessage(text){
    return ({type:REMOVE_MESSAGE,text})
}

function handlePosts(task,data){
   
   return  async (dispatch)=>{

           /// data object would be like
                    // data:{
                    //     userDetails:{id,token}
                    //     text:{message}
                    // }
   
        
        let headers={"Authorization":`Bearer ${data.userDetails.token}`}
        if(task==="addPost"){
             
           
            let response= new Promise (async(resolve,reject)=>{
                
                try{
                    let msg ={text:data.text}
                    let options={method:"post",url:`/api/user/${data.userDetails.id}/message`,data:msg,headers:headers}
                   
                    let fetched=await apiCall(options)
                    resolve(fetched)

                }catch(err){
                    reject(err)
                }
                
                
            })
            response.then((result)=>{
          
             dispatch(addMessage(result))
        
            }).catch((err)=>{
                console.log(err)
            })

       }
         if (task==="getAllMsgs"){
           
            let response= new Promise (async(resolve,reject)=>{
                
                try{
                    
                let fetched=await apiCall({method:"get",url:`/api/user/${data.userDetails.id}/messages`,headers})
                    resolve(fetched)

                }catch(err){
                    reject(err)
                }
                
                
            })

            response.then((data)=>{
               
             dispatch(getMessages(data.data))
             
            }).catch((err)=>{
                console.log(err)
            })


        }
        if (task==="deleteMsg"){
            let response=new Promise(async(resolve,reject)=>{
                    // msg id and mUid,cuid,token
                    try{
                                console.log(data)
                                debugger;
                            let options= {
                                method:"delete",
                                url:`/api/user/${data.userDetails.id}/message`,
                                data:{text:data.text},
                                headers
                            }
                            let fetched=await apiCall(options)
                            resolve(fetched)

                    }catch(err){
                              reject(err)
                    }
            })
            response.then((result)=>{
                console.log(result)
                dispatch(removeMessage(data.text))

            }).catch((err)=>{
                console.log(err)
            })

        }
    }
}

export default handlePosts;