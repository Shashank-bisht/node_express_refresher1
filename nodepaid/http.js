const http = require('http');

// http.createServer method in Node.js takes a callback function as an argument
const server = http.createServer((req,res)=>{
if(req.url === '/'){
    res.end('Welcome to our home page!');
    return;
}
if(req.url === '/about'){
    res.end('here is our about')
    return;
}
res.end(`<h1>Oops!</h1>`)
})

server.listen(8000);