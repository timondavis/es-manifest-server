var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
   dateReceived: {
       type: String,
       required: true
   },
   commodityName: {
       type: String,
       required: true
   },
   unitPrice: {
       type: Number,
       required: true
   },
   tonnage: {
       type: Number,
       required: true
   },
   expiry: {
       type: String,
       required: false,
       default: '-'
   }
});

module.exports = mongoose.model( 'ManifestItem', schema );