// this handles the coming errors and 
// and send error in json format

 function errorDisplay(err,req,res,next){
    
    // if some route acessed but error occur
    // this will also be handled
     res.status(err.status||500).json({
        Error:err.message||"Server side error occured please return to home page"
    })
  
}
module.exports= errorDisplay;
