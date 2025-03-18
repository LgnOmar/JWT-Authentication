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

app.get('/posts', (req,res)=> {
    res.json(posts);
})

app.get('login/', (req,res) => {
    //Authenticate User
})


app.listen(3000)