import React from 'react'

function DisplayMessage (props){
      function handleRemove(data){
        debugger;
         
           let args={
            text:props.data.text           
           }
           props.removeMsg(args)
      }
        
        return(
            <div>
              <div className="card text-center col-md-4">
              <div className="card-header"> By {props.data.user.userName }  </div>
              <div className="card-body">
        <h5 className="card-title">   { props.data.text}   </h5>                
  
              { (props.id===props.data.user._id) &&( <a onClick={()=>{handleRemove(props.data)}} className="btn btn-danger">delete</a>)}
              </div>
              </div>
            </div>



        )

}
export default DisplayMessage;