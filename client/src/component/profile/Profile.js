import React from "react"
import sampleProfile from "./sampleProfile"
import "./profileStyle.css"

class Profile extends React.Component{

    constructor(){
        super()
        this.state = {
            username:"",
            image:""
        }
    }

    componentDidMount(){
        const info = sampleProfile
        this.setState({
            username:info.username,
            image: info.image
        })
    }

    render(){
        return(
            <div className="profile">
                <img src={this.state.image} className="profile-image"/>
                <h1 className="profile-name">{this.state.username}</h1>
            </div>
        )
    }

}

export default Profile