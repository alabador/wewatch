const express = require('express');
const app = express();

require('dotenv').config({path: './config/.env'});

// COnnect to DB


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());


// Routes


app.listen(process.env.PORT, () => {
    console.log(`Server is running on Port ${process.env.PORT}.`)
})
