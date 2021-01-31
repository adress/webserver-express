const express = require('express')
const app = express()

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 8000;

//definicion del directorioi publico
app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/partials', function(err) {});
app.set('view engine', 'hbs');


app.get('/', function(req, res) {
    res.render('home.hbs', {
        nombre: 'jaime andres'
    });
})

app.get('/about', function(req, res) {
    res.render('about.hbs');
})


app.listen(port, () => {
    console.log(`servior listo en el puerto {port}`);
});