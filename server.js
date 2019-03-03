const express = require('express')
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

const app = express()

app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render('home.hbs', { url: req.url, nombre: 'alejandro bierge serrano', anio: new Date().getFullYear() + 1 })
});
app.get('/about', (req, res) => {
    res.render('about.hbs', { url: req.url, anio: new Date().getFullYear() + 1 })
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}\n...`);
});