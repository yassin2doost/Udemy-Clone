const
    express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    ejs = require('ejs'),
    engine = require('ejs-mate'),
    dataBase = require('./dataBase/dataBase'),
    mainRouter = require('./Routes/main');
    app = express();





// Middleware goes here :)    

app.use(morgan('combined'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs'); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.engine('ejs', engine);
app.use(mainRouter);



const port = process.env.PORT || 7777;

app.listen(port, err => {
    if(err) throw new(err);
    console.log(`Server is Running on ${port} :)`);
})