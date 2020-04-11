// this will be the root reducer file
import error from './error'
import currentUser from './user'
import {combineReducers}  from 'redux'


const rootReducer= combineReducers({error,currentUser})


export default rootReducer;