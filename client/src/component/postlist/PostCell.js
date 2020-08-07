import React from "react"

class PostCell extends React.Component{

    constructor(){
        super()
        this.state= {
            postID:"",
            userID:"",
            post:""
        }
    }

    componentDidMount(){
        // Load up data
        const data = this.props.data
        this.setState({
            postID: data.postID,
            userID: data.userID,
            post: data.post,
        })
    }

    render(){
        return(
            <div className="post-cell">
                <h2>{this.state.postID}</h2>
                <p>{this.state.post}</p>
            </div>
        )
    }



}

export default PostCell