(function(){
    'use strict';
})();

//  Initialize and import packages
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const rootRoutes = require('./routes/root');
const path = require('path');

// Create server
const app = express();

// Configure settings
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + 'dist/portfolio/');
const static_directory = path.join(__dirname + '/dist/portfolio/');

app.use(bodyParser.urlencoded({extended: true, limit: '100mb'}))
   .use(bodyParser.json())
   .use(express.static(static_directory))
   .use('/', rootRoutes);

// Configure port   
const PORT = process.env.PORT || 8080;

// Start server
app.listen(PORT, err => {
    if (err) {
        return console.log("ERROR:", err);;
    }
    console.log(`Listening on port ${PORT}...`);
});