const express = require('express');
const path = require('path');

const router = express.Router();

// /shop => GET
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/shop.html'));
});

// Add more shop-related routes here if needed

module.exports = router;
