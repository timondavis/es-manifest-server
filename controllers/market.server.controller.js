var MarketDataModel = require( '../models/market-data.server.model' );
var CommodityModel = require( '../models/commodity.server.model' );

exports.getMarketData = function ( req, res, next ) {

    var sort = extractSort( req.query );
    var filters = extractFilters( req.query );

    console.log( filters );

    var query = MarketDataModel.find(filters).sort(sort).populate( 'commodities' );


    query.exec( function( err, response ) {

        if ( err ) {
            next( err );
        } else {
            res.status( 200 ).json( response );
        }
    });
};

exports.deleteItem = function( req, res, next ) {

    console.log( req.params.itemId );

    MarketDataModel.findOne({ _id: req.params.itemId }).exec(
        function ( err, document ) {

            if ( err ) {
                console.log( err );
            } else {
                deleteCommodities( document.commodities );
                document.remove();
                res.status( 200 ).json( { 'status' : 'deleted' } );
            }
        }
    )


};

var deleteCommodities = function deleteCommodities( commodities ) {

    for ( var i = 0 ; i < commodities.length ; i++ ) {

        deleteCommodity( commodities[i] );
    }
};

var deleteCommodity = function deleteCommodity( id ) {

    CommodityModel.find({ _id: id }).remove().exec();
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

var extractSort = function extractSort( queryString ) {

    if ( ! queryString.sort ) return {};

    var sortObject = {};
    var field      = queryString.sort;
    delete queryString.sort;

    sortObject[field] =  1;

    if ( queryString.order && isValidOrderString( queryString.order ) ) {
        sortObject[field] = queryString.order;
        delete queryString.order;
    }

    return sortObject;
};

var isValidOrderString = function isValidOrderString( orderString ) {

    var isValid = false;

    switch( orderString ) {

        case( 'asc' ):
        case( 'desc' ):
        case( 'ascending' ):
        case( 'descending' ):
        case( '1' ):
        case( '-1' ):
            isValid = true;
            break;
        default:
            isValid = false;
            break;
    }

    return isValid;
};

var extractFilters = function extractFilters( filters ) {

    var processedFilters = {};

    for ( var filterName in filters ) {

        if ( filters.hasOwnProperty( filterName ) ) {

            if ( ! isKeyReserved( filterName ) ) {
                processedFilters[filterName] = new RegExp( filters[filterName], 'i' );
                delete filters[filterName];
            }
        }
    }

    return processedFilters;
};

var isKeyReserved = function isKeyReserved( keyName ) {

    return ( keyName == 'sort' || keyName == 'order' );
};
