const express = require('express');
const exphbs = require('express-handlebars');


const app = express();

//configurar express-handlebarscomo nuestro motor de vista:
app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));

app.use(express.static('public'))

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('site/home');
});


app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});