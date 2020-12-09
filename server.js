(function(){
    'use strict';
})();

//  Initialize and import packages
const express = require('express');
const router = express.Router();
const rootRoutes = require('./routes/root');
const path = require('path');
const contactRoutes = require('./routes/contact');
const experienceRoutes = require('./routes/experience');

// Create server
const app = express();

// Configure settings
const static_directory = path.join(__dirname + '/dist/portfolio/');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', static_directory);

app.use(express.json())
   .use(express.static(static_directory))
   .use('/api/contact', contactRoutes)
   .use('/api/experience', experienceRoutes)
   .all('*', rootRoutes);

// Configure port   
const PORT = process.env.PORT || 8080;

// Start server
app.listen(PORT, err => {
    if (err) {
        return console.log("ERROR:", err);;
    }
    console.log(`Listening on port ${PORT}...`);
});