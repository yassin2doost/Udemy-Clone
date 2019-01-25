const
    express = require('express'),
    morgan = require('morgan'),
    ejs = require('ejs'),
    engine = require('ejs-mate'),
    mainMiddlewares = require('./middlewares/mainMiddlewares'),
    mainRouter = require('./Routes/main');
    app = express();


app.use(morgan('combined'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs'); 
app.engine('ejs', engine);
app.use(mainRouter);



const port = process.env.PORT || 7777;

app.listen(port, err => {
    if(err) throw new(err);
    console.log(`Server is Running :)`);
})