const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/contact-us', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'contact_us.html'));
});

router.post("/success", (req, res) => {
    const { name, email } = req.body;
    const successMessage = `
      <h1>Form successfully filled!</h1>
      <p>Thank you, ${name}! We have received your details.</p>
    `;
    res.send(renderHTML(successMessage));
  });

module.exports = router;
