// here we will do either sign UP or login
import React ,{useState,useEffect} from 'react'
import {withRouter} from 'react-router-dom'
import { combineReducers } from 'redux';
function Auth(props){
    // get the heading and buttonText
    let {heading,buttonText}=props;
    let intialState={
        username:"",
        email:"",
        password:"",
        profileImg:""
    }



    let [user,setUser]=useState(intialState)
  
  
    function handleSubmit(e){
        e.preventDefault()
        let datas=e.target.querySelectorAll('input')
        console.log(typeof(datas))
        let newUser=[...datas].reduce((acc,data)=>{
            return ({...acc,[data.name]:data.value})
        },{})
        
        setUser(newUser)
        // this will handle the data     
        e.target.reset()

    }

    function handleChange(e){
        console.log(e.target.value)
    }
    
 
    useEffect(()=>{
        console.log("rendered")
        console.log(user)
    })

    let extras;
    return(
        <form onSubmit={handleSubmit}>
            <h2>{props.heading}</h2>
            email:<input type="text" name="email"  />
            password:<input type="password" name="password"  />
            {
                (()=>{
                        
                        if(props.signUp){
                            return(
                                <span>
                                username:<input type="text" name="username"  />
                                profileImg:<input type="text" name="profileImg"  />
                                </span>
                            )
                        }
                })()
            }

            <button type="submit" >{props.buttonText}</button>
        </form>
    )
}

export default withRouter(Auth)