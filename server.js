const http = require('http');
const qs = require('qs');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.method == 'GET') {
        fs.readFile('./views/register.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        })
    } else {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        })
        req.on('end', () => {
            console.log(qs.parse(data));
            return res.end('Register success');
        })
        req.on('error', () => {
            console.log('error');
        })
    }
});
server.listen(8080, () => {
    console.log('Server is running at localhost:8080')
})