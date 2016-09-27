var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({

    name : {
        type: String,
        require: true
    },
    cost : {
        type: number,
        require: true
    }
});

module.exports = mongoose.model( 'Commodity', schema );