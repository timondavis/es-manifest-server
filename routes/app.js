var express = require('express');
var router = express.Router();
var manifestItemController = require( '../controllers/manifest-item.server.controller' );

router.get( '/', function(req, res, next) {
    res.render('index');
});

router.get( '/manifest', manifestItemController.getAll );
router.post( '/manifest', manifestItemController.createItem );
router.delete( '/manifest/:itemId', manifestItemController.deleteItem );

module.exports = router;
