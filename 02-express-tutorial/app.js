const http = require('http')

const server = http.createServer((req, res)=>{
    res.end('Welcome Home')
})

server.listen(5000, ()=>{
    console.log('Listening on port 5000...');
})
