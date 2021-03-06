var express = require('express');
var router = express.Router();
var manifestItemController = require( '../controllers/manifest-item.server.controller' );
var marketDataController = require( '../controllers/market.server.controller' );

router.get( '/', function(req, res, next) {
    res.render('index');
});

router.get( '/manifest', manifestItemController.getAll );
router.post( '/manifest', manifestItemController.createItem );
router.delete( '/manifest/:itemId', manifestItemController.deleteItem );

router.get( '/market/data', marketDataController.getMarketData );
router.post( '/market/data', marketDataController.createItem );
router.delete( '/market/data/:itemId', marketDataController.deleteItem );

module.exports = router;
