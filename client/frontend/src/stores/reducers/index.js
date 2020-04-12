// this will be the root reducer file
import error from './error'
import currentUser from './user'
import messages from './messages'
import {combineReducers}  from 'redux'


const rootReducer= combineReducers({error,currentUser,messages})


export default rootReducer;