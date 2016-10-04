var MarketDataModel = require( '../models/market-data.server.model' );
var CommodityModel = require( '../models/commodity.server.model' );

exports.getAll = function ( req, res, next ) {

   var query = MarketDataModel.find().populate( 'commodities' );

   query.exec( function( err, response ) {

       if ( err ) {
           next( err );
       } else {
           res.status( 200 ).json( response );
       }
   });
};

exports.createItem = function( req, res, next ) {

   CommodityModel.collection.insert( req.body.commodities, function( err, commodityModels ) {
        if ( err ) {

            console.log( err );
        }

        req.body.commodities = commodityModels.insertedIds;

        var marketData = new MarketDataModel( req.body );

        marketData.save( function ( err, data ) {
            if ( err ) {

                console.log( err );
            } else {

                console.log( data );
            }
        });

    });

    res.status(200).send( 'Save Request Accepted' );

};
