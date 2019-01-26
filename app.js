
const
    express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    // MongoStore = require('connect-mongo')(session),
    compression = require('compression'),
    ejs = require('ejs'),
    engine = require('ejs-mate'),
    errorHandler = require('errorhandler');
    dataBase = require('./dataBase/dataBase'),
    chalk = require('chalk'),
    helmet = require('helmet'),
    generalConfig = require('./config/generalConfig'),
    mainRouter = require('./Routes/main');
    app = express();





// Middleware goes here :)  
app.use(helmet());  
// app.use(session({
//   resave: true,
//   saveUninitialized: true,
//   secret: process.env.SESSION_SECRET,
//   cookie: { maxAge: 1209600000 }, // two weeks in milliseconds
//   store: new MongoStore({
//     url: process.env.MONGODB_URI,
//     autoReconnect: true,
//   })
// }));
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs'); 
app.engine('ejs', engine);
app.use(mainRouter);








// Error Handler.

if (process.env.NODE_ENV === 'development') {
    // only use in development
    app.use(errorHandler());
  } else {
    app.use((err, req, res, next) => {
      console.error(err);
      res.status(500).send('Server Error');
    });
  }

app.listen(generalConfig.port, err => {
    if(err) throw new(err);
    console.log(chalk.cyan(`Server is Running on ${generalConfig.port} :)`,chalk.yellow('✓')));
});