const express = require('express');

const app = express();

const messagesscontroller = require('./controllers/messages.controller');

const friends = [{
    id : 0,
    name : "Sir Issac Newton"
},
{
    id : 1,
    name : "Albert Einstei"
}]

app.use(express.json());

app.post('/friends',(req,res)=>{
    if(!req.body.name)
    {
        res.status(400).json({
            error: "Missing friend name"
        });     
    }
    const newfriend={
        name : req.body.name,
        id : friends.length
    };
    friends.push(newfriend);
    res.json(newfriend);
});

app.get('/friends' , (req,res)=>{
    res.json(friends);
});

app.get('/friends/:id', (req,res) =>{
    const friendid = Number(req.params.id);
    const friend = friends[friendid];
    if(friend)
    {
        res.status(200).json(friend);
    }
    else
    {
        res.status(404).json({
            error: "Friend does not exist"
        })
       
    }
});

app.get('/messages',messagesscontroller.getmessages);

app.post('/messages',messagesscontroller.postmessages);

app.listen(2000 , ()=>{
    console.log("Server has been setup");
})