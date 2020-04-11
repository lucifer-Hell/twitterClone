import {SET_CURRENT_USER} from '../actionTypes'


const DEFAULT_STATE={
                        isAuthenticated:false,
                        user:{}
                    }

export default function (state=DEFAULT_STATE,action){
   
    
    switch(action.type){
    case SET_CURRENT_USER:
     
      
        return{
            ...state,
            isAuthenticated:action.isAuthenticated,
            user:action.user            
        }
    default :
        return state;

    }
}