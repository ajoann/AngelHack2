const express = require('express');
const bodyParser = require('body-parser');
const vision = require('node-cloud-vision-api')
const logger = require('morgan');
const axios = require('axios');
const mongoose = require('mongoose')
const mongoosedb = process.env.MONGODB_URI;

const port = process.env.PORT || 3000;
const app = express();

var Particle = require('./models/particle')

mongoose.connect(mongoosedb);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error. did you remember to create env.sh?'));
db.once('open', function() {
  // connected!
  const newParticle = new Particle({
   photonDeviceId: '200025001847343438323537',
   photoAddress: '1',
   lastWaste: 'compost',
   wasteHistory: [] })
  newParticle.save()

  Particle.find({photoDeviceId: '200025001847343438323536'}, function(err, device){
    console.log("found device, ", device)
  })
});

app.use(logger('dev'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


app.post('/andre', function(req, res) {
  labelPhoto(req.body.image)
  .then(type => res.json(type))
  .catch(err => {
    console.log(err);
    res.send({type: 'error', error: err})
  });
})

/* ********** error handlers ********** */

// app.use('/', routes);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
});


app.listen(port, function() {
  console.log('Express started. Listening on port %s', port);
});



/* Helper function */
function labelPhoto(base64){
  return new Promise((resolve, reject) =>{
    vision.init({auth: process.env.GOOGLE_API_KEY})
    // construct parameters
    const req = new vision.Request({
      image: new vision.Image({base64}),
      //image: new vision.Image({url: fileUri}),
      features: [
        new vision.Feature('LABEL_DETECTION', 10),
      ]
    })

    // send single request

      vision.annotate(req)
      .then(res => {
        var itemMatches = (res.responses[0].labelAnnotations)
        var destination = sortPhoto(itemMatches)
        // device number: 200025001847343438323536
        // access token: 83488e0ae4449156570ffe3b9c0774c826ea6166
        axios.post('https://api.particle.io/v1/devices/200025001847343438323536/led?access_token=83488e0ae4449156570ffe3b9c0774c826ea6166',
          {value: destination});
          resolve(destination);
      })
      .catch(e => {
        console.log('Error: ', e)
        reject(e);
      })
  })
}
function sortPhoto(itemLabelsArray){
 const compost = ['fruit','napkin', 'produce', 'food', 'vegetable', 'local food', 'vegetarian food', 'paper']
 const recycle = ['cola','product','aluminum', 'glass', 'laundry supply', 'household supply', 'water bottle', 'plastic bottle', 'bottle', 'bottled water', 'glass bottle']
 let destination = 'Trash'
 itemLabelsArray.forEach((label) => {
   if(compost.indexOf(label.description) !== -1 && label.score >= 0.5){
     destination = 'Compost'
   }
   else if(recycle.indexOf(label.description) !== -1 && label.score >= 0.5){
     destination = 'Recycle'
   }
 })

 Particle.find({'photonDeviceId': 'Dev 1'})
 .then((device) => {
   console.log('resp', device)
   // , function(err, device){
   if(device.length!==0){
     var currDevice = device[0]
     var lastWaste = device[0].lastWaste
     var newWasteHistory = Object.assign({}, device[0].wasteHistory);
     newWasteHistory[destination] +=1;
     currDevice.lastWaste = destination;
     currDevice.wasteHistory = newWasteHistory;
     currDevice.save(function(err, result) {
       console.log('ERROR: ', err);
       console.log('RESULT: ', result);
     });
   } else{
     var deviceWasteHistory = {"Compost": 0, "Trash": 0, "Recycle": 0}
     deviceWasteHistory[destination] = deviceWasteHistory[destination] + 1;
     var currDevice = new Particle({
        photonDeviceId: 'Dev 1',
        lastWaste: destination,
        wasteHistory: deviceWasteHistory
      })
     currDevice.save()
   }
 })

 return destination;

}
// function sortPhoto(itemLabelsArray){
//   const compost = ['product', 'fruit', 'produce', 'food', 'vegetable', 'local food', 'vegetarian food']
//   const recycle = ['product', 'laundry supply', 'household supply', 'water bottle', 'plastic bottle', 'bottle', 'bottled water', 'glass bottle']
//   let destination = 'Trash'
//   itemLabelsArray.forEach((label) => {
//     if(compost.indexOf(label.description) !== -1 && label.score >= 0.5){
//       destination = 'Compost'
//     }
//     else if(recycle.indexOf(label.description) !== -1 && label.score >= 0.5){
//       destination = 'Recycle'
//     }
//   })
//   console.log(destination)
//   return destination;
//
// }
