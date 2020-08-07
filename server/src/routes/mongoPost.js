const express = require('express')
const router = express.Router()
const Post = require("../model/postSchema")
const mongoose = require("mongoose")


const mongoDB = 'mongodb://127.0.0.1/myDatabase'

const connectOption = { useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(mongoDB, connectOption, () => {
    console.log("Connected to MongoDB")
})

router.get('/', async(req,res) => {
    console.log("Someone requested for posts")
    try {
        const posts = await Post.find().limit(5)
        res.json(posts)
    } catch (err) {
        res.json({message: err})
    }
})

router.post('/', async(req,res) => {

    const post = new Post({
        postID: req.body.postID,
        userID: req.body.userID,
        post: req.body.post
    })

    try {
        const savedPost = await post.save()
        res.json(savedPost)
    } catch (err) {
        res.json({message: err})
        console.log("Error in post request to MongoDB, check whether mongodb in on the correct URI")
    }
    

})



module.exports = router
