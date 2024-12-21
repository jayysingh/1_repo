const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Import Routes

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// Middleware to parse form data

app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files (for stylesheets, scripts, etc.)

app.use(express.static(path.join(__dirname, 'public')));

// Use Routes

app.use('/admin', adminRoutes); // Routes starting with /admin
app.use('/shop', shopRoutes);   // Routes starting with /shop

// Handle 404 Page Not Found

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'page-not-found.html'));
});

// Start the server

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
