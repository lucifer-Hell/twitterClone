import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk';
import rootReducer from './reducers'
// create store and export it.


export function configureStore(){

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,  composeEnhancers(  applyMiddleware(thunk)
));
 
 
  
    return store;
}


