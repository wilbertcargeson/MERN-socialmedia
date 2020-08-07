import React from "react"
import sampleData from "./SampleData"
import PostCell from "./PostCell"
import "./post.css"
import { isCompositeComponent } from "react-dom/test-utils"

class PostList extends React.Component{

    constructor(){
        super()
        this.state= {
            data:[]
        }
    }

    componentDidMount(){
        // Load up data from sampledata for now, in the future will use API calling
        // this.setState({data:sampleData.posts})
        // console.log(this.state.data)

        const URL = "http://localhost:3001/post/"

        fetch(URL)
        .then( res => {
            console.log(res)
            return(res.json())
        })
        .then( fetchedData => {
            console.log(fetchedData)
            this.setState({data: fetchedData})
        })
        .catch((error) => {
            console.error(error);
          })
    }

    render(){
        // Create bunch of PostCell divs using map
        const posts = this.state.data.map( (postData) => {return(<PostCell key={postData.postId} data={postData}/>)})
        return(<div className="post-list"> 
            {posts}
        </div>)
    }



}

export default PostList