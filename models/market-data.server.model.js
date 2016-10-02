var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({

    date : {
        type: String,
        require: true
    },
    planet : {
        type: String,
        require: true
    },
    region : {
        type: String,
        require: true
    },
    commodities : [{
        'type': Schema.Types.ObjectId,
        'ref': 'Commodity'
    }]

});

module.exports = mongoose.model( 'MarketData', schema );