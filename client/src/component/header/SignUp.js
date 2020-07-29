import React from "react"
import "./header.css"

class SignUp extends React.Component{

    constructor(){
        super()
        this.state = {
            clicked: true
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        // This will redirect to sign up page
        alert("SignUp")
        this.setState( {clicked:false})
    }

    render(){

        return(
            <div>
                <button 
                onClick={this.handleClick}
                className="button-header" 
            > Sign Up </button> 
            </div>
            
        )
    }
}

export default SignUp