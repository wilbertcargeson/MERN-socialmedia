const express = require('express')
const app = express()
const port = 3001
var cors = require('cors');


const sampleData = {
    "posts": [
        {
            postId: "001",
            userId: "User1",
            post: "Look at this!,",

        },

        {
            postId: "002",
            userId: "User2",
            post: "Look at this too!,",

        },

        {
            postId: "003",
            userId: "User3",
            post: "Look at this as well!,",

        },
        {
            postId: "004",
            userId: "User3",
            post: "Look at this as well!,",

        },
        {
            postId: "005",
            userId: "User3",
            post: "Look at this as well!,",

        },
        {
            postId: "006",
            userId: "User3",
            post: "Look at this as well!,",

        }


    ]
}

app.use(cors())
app.get('/', (req,res) => {
    res.json(sampleData)
})
app.listen(port, ()=> console.log("Server Running"))