import React from 'react'

function DisplayMessage (props){

        // display message 
        return(
          
            <div className="card text-center col-md-4">
              <div className="card-header"> Header </div>
              <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <p className="card-text">Card with header and footer.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a></div>
              <div className="card-footer text-muted"> Footer </div>
            </div>
       


        )

}
export default DisplayMessage;