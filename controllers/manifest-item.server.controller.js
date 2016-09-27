var ManifestItemModel = require( '../models/manifest-item.server.model' );

exports.getAll = function( req, res, next ) {

    var query = ManifestItemModel.find();

    // Find all items in the manifest and return as JSON
    query.exec( function( err, response ) {

        if ( err ) {

            return next( err );
        } else {

            res.status( 200 ).json( response );
        }
    })
};

exports.deleteItem = function( req, res, next ) {

   ManifestItemModel.find({ _id: req.params.itemId }).remove().exec(
       function ( err, response ) {

           if ( err ) {
               console.log( err );
               res.status( 404 );
           } else {
               res.status( 200 ).json( { 'status' : 'deleted' } );
           }
       }
   );
}


exports.createItem = function( req, res, next ) {

    var itemStats = req.body;

    var item = new ManifestItemModel( itemStats );
    item.save();

    res.status( 200 ).json( item );
};

