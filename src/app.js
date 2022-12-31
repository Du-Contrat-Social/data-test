const http = require('http');

const server = http.createServer((req,res) => { //request and response

            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end('<h1>TEST TEST TEST TEST</h1>');
}); 


server.listen(3000, '127.0.0.1', () => {
    console.log('Server running...');
})