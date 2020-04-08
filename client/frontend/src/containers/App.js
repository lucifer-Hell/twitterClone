import React from 'react'
import './App.css'
import {Provider} from "react-redux"
import {configureStore} from "../stores"
import {BrowserRouter as Router} from "react-router-dom"
import Navbar from "./navbar"
import Main from "./Main"
//create state
const store=configureStore();

function App (props){
  return(
    <Provider store={store}>
      <Router>
            <div id="mainApp">
                <Navbar />
                <br></br>
                <Main />
            </div>
        </Router>
      </Provider>
  

  )
}

export default App;