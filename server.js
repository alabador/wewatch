const express = require('express');
const app = express();
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const animeRoutes = require('./routes/anime')

require('dotenv').config({path: './config/.env'});

// Connect to DB
// connectDB()

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());


// Routes
app.use('/', homeRoutes)
app.use('/anime', animeRoutes)


connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on Port ${process.env.PORT}.`)
    })
})
