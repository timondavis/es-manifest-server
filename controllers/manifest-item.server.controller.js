var ManifestItemModel = require( '../models/manifest-item.server.model' );

exports.getAll = function( req, res, next ) {

    var query = ManifestItemModel.find();

    // Find all items in the manifest and return as JSON
    query.exec( function( err, response ) {

        if ( err ) {

            return next( err );
        } else {

            res.json( response );
        }
    })

};

exports.testCreate = function( req, res, next ) {

    var item = new ManifestItemModel({
        dateReceived: '9/15/3013',
        commodityName: 'Good Stuff',
        unitPrice: 10,
        tonnage: 15,
        expiry: '9/30/3013'
    })

    item.save();

    res.send( "<h2>Hello, thank you for registering</h2>" );

};

exports.createItem = function( req, res, next ) {

    var itemStats = req.body;

    var item = new ManifestItemModel( itemStats );
    item.save();

    res.json( item );
};

