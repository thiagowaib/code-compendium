// Imports
const express = require("express")
const jwt = require("jsonwebtoken")

const posts = require("./data/posts.js")
const authenticateToken = require("./middlewares/authenticateToken")

require("dotenv").config()


// App Runtime
const app = express()
app.use(express.json())


app.post('/login', async(req, res) => {
    // Authenticate User
    const user = 
    {
        name: req.body.username
    }
    
    const accessToken= jwt.sign(
        user,
        process.env.JWT_ACCESS_TOKEN_SECRET
    )
        
    res.json({accessToken})
})
    
app.get('/posts', authenticateToken, (req, res) => {
    res.json(posts.filter(post => post.username === req.user.name))
})

app.listen(3001)