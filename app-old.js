const http = require('http');

http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        let data = {
            nombre: 'jaime ortiz aranda',
            edad: 25,
            url: req.url
        }
        res.write(JSON.stringify(data));
        // res.write('hola mundo');
        res.end();
    })
    .listen(8000);

console.log("escuchando el puerto 8000");