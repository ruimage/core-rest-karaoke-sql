const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  res.redirect('/all-the-entries');
});

module.exports = router;
