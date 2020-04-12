import {GET_MESSAGES,ADD_MESSAGE,REMOVE_MESSAGE} from '../actionTypes'

const DEFAULT_STATE={
    userPosts:[]
}

function messages(state=DEFAULT_STATE,action){
  
    switch (action.type){
       
        case GET_MESSAGES:
         
            let newMsgs=action.userPosts
           
            return {...state,userPosts:newMsgs}
        case ADD_MESSAGE:
            let newMsg=action.newMsg.data

            
            let newPosts=[...(state.userPosts)].map((data)=>data);
            newPosts.push(newMsg)
            console.log(newPosts)
            return {...state}
        case REMOVE_MESSAGE:
            let text=action.text
            let changedPosts=state.userPosts.filter((data)=>(data.text!==text));
            return {...state,userPosts:changedPosts}
        default:
            return state;
        
              
    }
}

export default  messages