var express = require('express');
var router = express.Router();
var models = require('../models');
var User = models.User;

const path = require('path');
const axios = require('axios');


//////////////////////////////// PUBLIC ROUTES ////////////////////////////////
// Users who are not logged in can see these routes

// router.get('/', function(req, res) {
    // res.sendFile(path.join(__dirname + '../public/index.html'));
// });
//
// router.get("/connect/callback", function (req, res) {
//     var oauth2Client = getoAuthClient()
//     var session = req.session;
//     var code = req.query.code; // the query param code
//     console.log("oauth2Client, ", oauth2Client)
//     oauth2Client.getToken(code, function(err, tokens) {
//       // Now tokens contains an access_token and an optional refresh_token. Save them.
//  	  console.log("tokens ", tokens)
//       if(!err) {
//         oauth2Client.setCredentials(tokens);
//         //saving the token to current session
//         session["tokens"]=tokens;
//         console.log("login successful!")
//         simpleLabel(oauth2Client)
//         res.redirect('/hi')
//
//
//       }
//       else{
//       	console.log(err)
//         res.send(`
//             <h3>Login failed!!</h3>;
//         `);
//       }
//     });
// });

router.get('/andre', function(req, res) {
  simpleLabel();
  res.send('hi bb');
})
function simpleLabel(){
	var vision = require('node-cloud-vision-api')
	vision.init({auth: 'AIzaSyD3uyjc1W7J47G3o24Ez5fyBrNL4en0fwo'})
	//console.log(" VISION IMAGE ", vision.images.annotate)
  // var fileName = __dirname + "/sorter/images/less_water.JPG"
  var fileName = path.join(__dirname, '../images/less_water.JPG');
  console.log('FILE NAME: ', fileName);
	// construct parameters
	const req = new vision.Request({
    image: new vision.Image(fileName),
	  //image: new vision.Image({url: fileName}),
	  features: [
	    new vision.Feature('LABEL_DETECTION', 10),
	  ]
	})

	// send single request
	vision.annotate(req).then((res) => {
	  // handling response
	  let destination = 'trash'
    //console.log("RESPONSE: ", res.responses)
    var itemMatches = (res.responses[0].labelAnnotations)
    const compost = ['product', 'fruit', 'produce', 'food', 'vegetable', 'local food', 'vegetarian food']
    const recycle = ['product', 'laundry supply', 'household supply', 'water bottle', 'plastic bottle', 'bottle', 'bottled water', 'glass bottle']
    console.log("res.responses: ", res.responses[0].labelAnnotations) //array
    res.responses[0].labelAnnotations.forEach((item) => {

      if(compost.indexOf(item.description) !== -1 && item.score >= 0.85){
        destination = 'compost'
      }
      else if(recycle.indexOf(item.description) !== -1 && item.score >= 0.85){
        destination = 'recycle'
      }
    })
    console.log("destination: ", destination)

    axios.post('https://api.particle.io/v1/devices/200025001847343438323536/led?access_token=83488e0ae4449156570ffe3b9c0774c826ea6166',
  {
    value: destination
  }).then(console.log).catch(console.log);
    return destination;

	}, (e) => {
	  console.log('Error: ', e)
	})
}


router.get("/hi", function(req, res){
  res.send("HI")

})


/************* Helper function *************/
function labelPhoto(base64){
  return new Promise((resolve, reject) =>{
    vision.init({auth: 'AIzaSyD3uyjc1W7J47G3o24Ez5fyBrNL4en0fwo'})
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
  const compost = ['product', 'fruit', 'produce', 'food', 'vegetable', 'local food', 'vegetarian food']
  const recycle = ['product', 'laundry supply', 'household supply', 'water bottle', 'plastic bottle', 'bottle', 'bottled water', 'glass bottle']
  let destination = 'Trash'
  itemLabelsArray.forEach((label) => {
    if(compost.indexOf(label.description) !== -1 && label.score >= 0.5){
      destination = 'Compost'
    }
    else if(recycle.indexOf(label.description) !== -1 && label.score >= 0.5){
      destination = 'Recycle'
    }
  })
  console.log(destination)
  return destination;

}


///////////////////////////// END OF PUBLIC ROUTES /////////////////////////////
//
// router.use(function(req, res, next){
//   if (!req.user) {
//     res.redirect('/login');
//   } else {
//     return next();
//   }
// });

//////////////////////////////// PRIVATE ROUTES ////////////////////////////////
// Only logged in users can see these routes
//
// router.get('/protected', function(req, res, next) {
//   res.render('protectedRoute', {
//     username: req.user.username,
//   });
// });

///////////////////////////// END OF PRIVATE ROUTES /////////////////////////////

module.exports = router;
