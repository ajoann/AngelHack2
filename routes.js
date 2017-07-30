const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});


router.post('/andre', function(req, res) {
  labelPhoto(req.body.image)
  .then(type => res.json({type}))
  .catch(err => {
    console.log(err);
    res.send({type: 'error', error: err})
  });
});

module.exports = router;
