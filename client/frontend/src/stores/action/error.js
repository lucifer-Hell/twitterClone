import {ADD_ERROR,REMOVE_ERROR} from '../actionTypes'


export function addError(err){
    return ({type:ADD_ERROR,error:err})
   }
   
export function removeError(){
    
    console.log("can't figure remove error")
    return ({type:REMOVE_ERROR})
}

// this can be called directly from main.js to clear errors 
// above ones just return states
export function clearError(){
 
  return  (dispatch)=>{
              dispatch({type:REMOVE_ERROR})
   
    }         
    
}