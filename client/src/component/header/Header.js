import React from "react"
import Title from "./Title"
import LoginButton from "./LoginButton"
import "./header.css"
import SignUp from "./SignUp"

class Header extends React.Component{

    constructor(){
        super()
        this.state = {

        }

    }

    

    render(){
        return(
            <div className="header">
                <LoginButton />
                <SignUp />

                <Title />
            </div>

        )
    }


}

export default Header 