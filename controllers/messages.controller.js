function getmessages(req,res){
    res.send('<ul><li>Sir Issac Newton</li></ul>');
}

function postmessages(req,res){
    res.send("Aur be lowde");
}

module.exports={
    getmessages,
    postmessages,
};