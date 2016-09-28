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
        { 'name': 'heavy metals', 'cost': 1012 },
        { 'name': 'luxury goods', 'cost': 1228 }
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

    /*CommodityModel.create(
        commodities[0],
        commodities[1],
        commodities[2],
        commodities[3],
        commodities[4],
        commodities[5],
        commodities[6],
        commodities[7],
        commodities[8],
        commodities[9],
        function( err, commodityModelInstance ) {

            if ( err ) return handleError( err );
            commodityModels.push( commodityModelInstance._id );
        }
    ).then(
       function( commodities ) {

           console.log( commodities );
           var marketData = {
               'date': '9/14/3013',
               'planet' : 'Rigel IV',
               'region' : 'Human Space',
               'commodities': commodityModels
           };

           res.status(200).json( marketData );
           marketData.save();


       },
       function( error ) {

           console.log( error );
           res.status(500).json( error );
       }
    );*/
};

exports.testRead = function( req, res ) {

    MarketDataModel.find().populate( 'commodities' ).exec( function( err, commodity ) {

        if ( err ) {

            res.status( 500 ).json( { 'status': 'failed' } );
        }

        res.status( 200 ).json( commodity );
    });
};

createCommodityModels = function createCommodityModels( commodities ) {
};

