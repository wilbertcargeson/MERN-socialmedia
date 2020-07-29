import React from "react"

class PostCell extends React.Component{

    constructor(){
        super()
        this.state= {
            postId:"",
            userId:"",
            post:""
        }
    }

    componentDidMount(){
        // Load up data
        const data = this.props.data
        this.setState({
            postId: data.postId,
            userId: data.userId,
            post: data.post,
        })
    }

    render(){
        return(
            <div className="post-cell">
                <h2>{this.state.postId}</h2>
                <p>{this.state.post}</p>
            </div>
        )
    }



}

export default PostCell