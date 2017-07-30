var mongoose = require('mongoose');

var particleSchema = new mongoose.Schema({
 photonDeviceId: String,
 lastWaste: String,
 wasteHistory: Object,

});

module.exports = mongoose.model('Particle', particleSchema);
