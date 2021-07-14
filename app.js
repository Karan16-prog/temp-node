const http = require('http');

const server = http.createServer((req,res)=>{
  if(req.url === '/'){
    res.end('Welcome to the Matix')
  }
  if (req.url === '/about'){
    res.end('Here is our map')
  }
  res.end(`
    <h1>404 NOT FOUND</h1>
    <a href='/'>Back to the Matrix</a>`)
})
server.listen(5000);
