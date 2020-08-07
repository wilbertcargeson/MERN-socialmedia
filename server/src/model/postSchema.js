const mongoose = require('mongoose')
 


const PostSchema =  mongoose.Schema({
    postID: String,
    userID: String,
    post: String,
    date: {
        type: Date,
        default: Date.now
    }
}, {collection: 'test'})

module.exports = mongoose.model("Posts", PostSchema)