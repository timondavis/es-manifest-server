var MarketDataModel = require( '../models/market-data.server.model' );
var CommodityModel = require( '../models/commodity.server.model' );

exports.test = function( req, res ) {
var commodities = [

        { 'name': 'food', 'cost': 243 },
        { 'name': 'clothing', 'cost': 300 },
        { 'name': 'metal', 'cost': 376 },
        { 'name': 'equipment', 'cost': 568 },
        { 'name': 'plastic', 'cost': 184 },
        { 'name': 'medical', 'cost': 787},
        { 'name': 'industrial', 'cost': 733 },
        { 'name': 'electronics', 'cost': 848 },
        { 'name': 'heavyMetals', 'cost': 1012 },
        { 'name': 'luxuryGoods', 'cost': 1228 }
    ];

    CommodityModel.collection.insert( commodities, function( err, commodityModels ) {
        if ( err ) {

            console.log( err );
        }
        var marketData = new MarketDataModel( {
            'date': '9/14/3013',
            'planet' : 'Tomlinson\'s Planet',
            'region' : 'Human Space',
            'commodities': commodityModels.insertedIds
        });

        marketData.save( function ( err, data ) {
            if ( err ) {

                console.log( err );
            } else {

                console.log( data );
            }
        });

    });

    res.status( 200 ).send( 'Save Request Accepted' );
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

exports.testRead = function( req, res ) {

    MarketDataModel.find().populate( 'commodities' ).exec( function( err, commodity ) {

        if ( err ) {

            res.status( 500 ).json( { 'status': 'failed' } );
        }

        res.status( 200 ).send( 'Save Request Accepted' );
    });
};

