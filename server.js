//  Initialize and import packages
const express = require('express');


// Create server
const app = express();

// Configure settings
const PORT = process.env.PORT || 8080;

// Start server
app.listen(() => {
    console.log(`Listening on port ${PORT}...`);
});