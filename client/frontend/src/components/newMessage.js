import React from 'react'

function NewMessage(props){
    function handleSubmit(e){
        e.preventDefault()
       
        props.addPost(e.target.querySelector("input").value)
        e.target.reset()
    }

    return (
                <div>
                   
                    <form onSubmit={handleSubmit}>
                        Add your Message :<input type="text" name="message" />
                        <button type="submit" >Post the message !!</button>
                    </form>
                </div>

    )


}

export default NewMessage