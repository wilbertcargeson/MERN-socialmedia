import React from "react"
import "./header.css"
import HeaderButton from "./HeaderButton"

class LoginButton extends React.Component{

    constructor(){
        super()
        this.state = {
            clicked: true
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        // Will send data to API to check for validation
        alert("Login")
        this.setState( {clicked:false})
    }

    render(){

        return(
            <div>
                <button 
                onClick={this.handleClick}
                className="button-header" 
            > Login </button> 
            </div>
            
        )
    }
}

export default LoginButton