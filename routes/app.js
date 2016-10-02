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

router.get( '/market/data/test', marketDataController.test );
router.get( '/market/data/test/read', marketDataController.testRead );
router.post( '/market/data', marketDataController.createItem );

module.exports = router;
