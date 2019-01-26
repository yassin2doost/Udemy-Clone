
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
    passport = require('passport'),
    chalk = require('chalk'),
    helmet = require('helmet'),
    generalConfig = require('./config/generalConfig'),
    mainRoute = require('./Routes/main');
    studentRoute = require('./Routes/student');
    app = express();


// Middleware goes here :)  
app.use(helmet());  
app.use(express.static(__dirname + '/public'));
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
app.use(morgan('tiny'));
app.engine('ejs', engine);
app.set('view engine', 'ejs'); 
app.use(passport.initialize());
app.use(passport.session());
app.use(mainRoute);
app.use(studentRoute);



// Error Handler.
// if (process.env.NODE_ENV === 'production') {
//     // only use in development
//     app.use(errorHandler());
//   } else {
//     app.use((err, req, res, next) => {
//       console.error(err);
//       res.status(500).render('./partials/error');
//     });
//   }

  // Asignning Port.
app.listen(generalConfig.port, err => {
    if(err) throw new(err);
    console.log(chalk.cyan(`Server is Running on ${generalConfig.port} :)`,chalk.yellow('✓')));
});