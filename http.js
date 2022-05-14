const http = require("http");

const port = 4000;

const friends = [
    {
      id: 0,
      name: 'Nikola Tesla',
    },
    {
      id: 1,
      name: 'Sir Isaac Newton',
    },
    {
      id: 2,
      name: 'Albert Einstein',
    }
  ];

const server  = http.createServer((req,res) =>{
    const items = req.url.split('/');
   // if(req.url === '/friends'){
        /*res.writeHead(200,{
        'Content-Type' : 'application/json',
        });*/
    if(req.method === 'POST' && items[1] === 'friends')
    {
        req.on('data' , (data)=>{
            const word = data.toString();
            console.log('Request:',word);
            friends.push(JSON.parse(word));
        });
    }
    else if(req.method === 'GET' && items[1] === 'friends'){
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        /*res.end(JSON.stringify({
            id : 1,
            name : 'Priyansh Malik',
        }));*/
        if(items.length===3)
        {
            const index = Number(items[2]);
            res.end(JSON.stringify(friends[index]));
        }
        else{
            res.end(JSON.stringify(friends));
        }
       
    } else if(req.method === 'GET' && items[1] === 'messages'){
        res.statusCode = 200;
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li>Hey Priyansh</li>');
        res.write('<li>How are you doing</li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    }
    else if(req.url === '/'){
        res.statusCode = 200;
        res.setHeader('Content-Type' , 'text/plain');
        res.end("Hello Priyansh , hope you are doing well");
    }
    else{
        res.statusCode=404;
        res.end();
    }
})

server.listen(port, () =>{
    console.log(`Listening on port number ${port}...`);
})