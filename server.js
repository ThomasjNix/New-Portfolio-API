(function () {
    'use strict';
})();

//  Initialize and import packages
const express = require('express'),
    rootRoutes = require('./routes/root'),
    path = require('path'),
    contactRoutes = require('./routes/contact'),
    experienceRoutes = require('./routes/experience'),
    adminRoutes = require('./routes/admin'),
    authRoutes = require('./routes/auth'),
    mongoose = require('mongoose');

// Create server
const app = express();

// Configure application settings
const static_directory = path.join(__dirname + '/dist/portfolio/');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', static_directory);

app.use(express.json())
    .use(express.static(static_directory))
    .use('/api/contact', contactRoutes)
    .use('/api/experience', experienceRoutes)
    .use('/api/admin', adminRoutes)
    .use('/auth', authRoutes)
    .use(function (err, req, res, next) {
        if (err.name === 'UnauthorizedError') {
             return res.status(403).send(false);
        }
    })
    .all('*', rootRoutes);

// Connect to MongoDB database via Mongoose
mongoose.connect('mongodb://127.0.0.1/my_database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

const database = mongoose.connection;
database.on('error', console.error.bind(console, 'Error connecting to MongoDB'));

// Configure port   
const PORT = process.env.PORT || 8080;

// Start server
app.listen(PORT, err => {
    if (err) {
        return console.log("ERROR:", err);;
    }
    console.log(`Listening on port ${PORT}...`);
});