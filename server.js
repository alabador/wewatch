const express = require('express');
const app = express();
const mongoose = require('mongoose') //helps us use models, better interaction with db
const passport = require('passport') //helps us with auth, has strategies for different types of auth
const session = require('express-session') // cookies - allows us to keep users logged in
const MongoStore = require('connect-mongo') //allows us to store session in mongodb
const flash = require('express-flash') //flashes a message when validation fails
const logger = require('morgan') //helps log all the requests in terminal
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const animeRoutes = require('./routes/anime')
const mainRoutes = require('./routes/main')

require('dotenv').config({path: './config/.env'});

require('./config/passport')(passport)

// Connect to DB
connectDB()

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(logger('dev'))

// Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({
        mongoUrl: process.env.DB_STRING
      }),
    })
  )

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

// Routes
app.use('/', mainRoutes)
app.use('/home', homeRoutes)
app.use('/anime', animeRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on Port ${process.env.PORT}.`)
})
