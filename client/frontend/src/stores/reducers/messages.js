import {GET_MESSAGES,ADD_MESSAGE,REMOVE_MESSAGE} from '../actionTypes'

const DEFAULT_STATE={
    usersPosts:[]
}

function messages(state=DEFAULT_STATE,action){
    switch (action.type){
        case GET_MESSAGES:
            return {...state,userPosts:action.userPosts}
        case ADD_MESSAGE:
            let newMsg=action.newMsg
            let newPosts=state.userPosts.map((data)=>data);
            newPosts.push(newMsg)
            return {...state,userPosts:newPosts}
        case REMOVE_MESSAGE:
            let msgId=action.msgId
            let changedPosts=state.userPosts.filter((data)=>(data._id!==msgId));
            return {...state,usersPosts:changedPosts}
        default:
            return state;
        
              
    }
}

export default  messages