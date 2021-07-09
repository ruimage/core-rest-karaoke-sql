const express = require('express');
const router = express.Router();


router.get('/', async (req, res, next) => {
  return res.redirect('/all-the-entries');
});

module.exports = router;