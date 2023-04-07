const express = require('express'); //importing library 
const exphbs = require('express-handlebars'); //importing library 
const bodyParser = require('body-parser'); //importing library 
const mysql = require('mysql'); //importing library 

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000; //localhost 

//parsing middleware 
//parse application 
app.use(bodyParser.urlencoded({ extended: false}));


app.use(bodyParser.json());

//static files
app.use(express.static('public'));

//Templating Engine
app.engine('hbs', exphbs.engine( {extname:'.hbs' }));
app.set('view engine', 'hbs');

//router
app.get('', (req, res) => {
    res.render('home');
});

app.listen(port, () => console.log(`Listen on port ${port}`));


