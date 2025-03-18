const express = require("express");
const app = express();

const posts= [
    {
        username : 'Omar',
        title : 'Post 1'
    },
    {
        username : 'Abdo',
        title : 'Post 2'
    }

]

app.get('/post', (req,res)=> {
    res.json(posts);
})


app.listen(3000)