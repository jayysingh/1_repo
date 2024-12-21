const express = require('express');
const path = require('path');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res) => {
    const { productName, productSize } = req.body;
    console.log('Product Name:', productName);
    console.log('Product Size:', productSize);
    res.redirect('/shop');
});

module.exports = router;
