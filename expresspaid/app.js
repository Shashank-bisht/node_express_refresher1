const http = require('http');

const {readFileSync} = require('fs');
const homepage = readFileSync("./navbar-app/index.html");
const homestyle = readFileSync("./navbar-app/styles.css");
const homeimage = readFileSync("./navbar-app/logo.svg");
const homelogic = readFileSync("./navbar-app/browser-app.js");
const server = http.createServer((req, res) => {
  // Set the status code to 200 (OK) and specify the Content-Type header
  const url =req.url;
  if(url === '/'){
    res.writeHead(200, { 'Content-Type': 'text/html' });
 // content-type is a header
    res.write(homepage);
    res.end();
  }
  else if(url === '/about'){
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>about page</h1>');
    res.end();
  }
  else if(url === '/styles.css'){
    res.writeHead(200, { 'Content-Type': 'text/css' });
    res.write(homestyle);
    res.end();
  }
  else if(url === '/logo.svg'){
    res.writeHead(200, { 'Content-Type': 'image/svg+xml' });
    res.write(homeimage);
    res.end();
  }
  else if(url === '/browser-app.js'){
    res.writeHead(200, { 'Content-Type': 'text/javascript' });
    res.write(homelogic);
    res.end();
  }

  //404
  else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('<h1>Oops!</h1>');
    res.end();
  }
});

server.listen(8080)

// you can see here without using express the code is so much long for a single route we have to write so much code