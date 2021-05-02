const 
  express= require('express'),
  flash = require('express-flash'),
  cookieParser = require('cookie-parser'),
  session = require('express-session'),
  path= require('path');

const con = require("./config/database.js")
const app= express();
var sessionStore = new session.MemoryStore;
// importing routes
const Routes= require('./routes/routes');
// settings
app.set('port', process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
// connecting route to database
app.use(function(req, res, next) {
  req.con = con
  next()
})
app.use(express.urlencoded({extended: false}));
// static files
app.use(express.static(path.join(__dirname, 'public')));
// session
app.use(cookieParser('secret'));
app.use(session({
  cookie: { maxAge: 600000 },
  store: sessionStore,
  saveUninitialized: true,
  resave: 'true',
  secret: 'secret'
}));
app.use(flash());
// helper function
const Function = require("./middlewares/function");
app.locals= Function;
// routes
app.use('/',Routes);
// starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});

