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
        type: string,
        require: true
    },
    commodities : {
        type: [ mongoose.Types.ObjectId ],
        ref: 'Commodity'
    }

});

module.exports = mongoose.model( 'MarketData', schema );