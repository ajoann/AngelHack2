const express = require('express');
const router = express.Router();
const path = require('path');
const mongoose = require('mongoose')
const mongoosedb = 'mongodb://test:test@ds129023.mlab.com:29023/angelhacksf2017';
mongoose.connect(mongoosedb);
var db = mongoose.connection;

const Particle = require('./models/particle')


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

router.get('/recyclable', function(req, res) {
  console.log('inside route');
  Particle.find({})
    .then((resp) => {
      console.log('resp', resp);
      res.send(resp)
    })
    .catch((err) => {
      console.log('error in route', err);
    })
})

module.exports = router;
