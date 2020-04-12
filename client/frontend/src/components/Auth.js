// here we will do either sign UP or login
import React ,{useState,useEffect} from 'react'
import {withRouter, useHistory} from 'react-router-dom'

function Auth(props){
    // get the heading and buttonText
    
    let intialState={
        name:"",
        email:"",
        password:"",
        profileImg:""
    }

    let authUser=props.authUser;

    let [user,setUser]=useState(intialState)
    let [sub,setSub]=useState(false)
    
    function handleSubmit(e){
       
        e.preventDefault()
        let datas=e.target.querySelectorAll('input')
        let newUser=[...datas].reduce((acc,data)=>{
            return ({...acc,[data.name]:data.value})
        },{})
        setUser(newUser)
        setSub(true)
     
        e.target.reset()

    }


    
    let history=useHistory();
    useEffect(()=>{
      
        if(props.isAuthenticated===true){
           history.push("/")
        }

       
      if(sub===true){
          
        console.log(user)
        if(props.signUp)authUser(user,"signUp")
        else authUser(user,"logIn")
          setSub(false)
        

      }     
       
    },[sub,user,authUser,history,props.signUp,props.isAuthenticated])
  

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
                                username:<input type="text" name="name"  />
                                profileImg:<input type="text" name="profileImg"  />
                                </span>
                            )
                        }
                })()
            }

            <button type="submit" >{props.buttonText}</button>
            {(props.error.message!==null) &&( <div className="alert alert-danger"> <strong>{props.error.message}</strong> </div>)}
        </form>
    )
}

export default withRouter(Auth)