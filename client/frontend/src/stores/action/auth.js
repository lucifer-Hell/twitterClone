// this will handle auth action
import apiCall from '../../services/api'
import {SET_CURRENT_USER} from '../actionTypes'
import {addError,removeError} from './error.js'

function authUser(data,mode){
    return (dispatch)=>{
        let response=new Promise(async(resolve,reject)=>{
            try{
                let fetchedData=await (apiCall("post",`/api/auth/${mode}`,data))
              //  console.log(fetchedData.data)
                resolve(fetchedData.data)

            }catch(err){

                
                reject(err)
            }
        })
               
     
        response.then((data,x)=>{
           // IF USER LOGGED IN
           // remove any previous errors if there
           dispatch(removeError())
            dispatch({type:SET_CURRENT_USER,user:data,isAuthenticated:true})


        }).catch((err)=>{
            // if there is an error
           
            dispatch(addError(err.message))
           
            
        })
                
       
       
    }

}

export default authUser;