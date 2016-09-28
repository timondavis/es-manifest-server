var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({

    name : {
        type: String,
        require: true
    },
    cost : {
        type: Number,
        require: true
    }
});

module.exports = mongoose.model( 'Commodity', schema );
