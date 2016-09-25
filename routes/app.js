var express = require('express');
var router = express.Router();
var manifestItemController = require( '../controllers/manifest-item.server.controller' );

router.get( '/', function(req, res, next) {
    res.render('index');
});

router.get( '/manifest/test/create', manifestItemController.testCreate );
router.get( '/manifest/all', manifestItemController.getAll );
router.post( '/manifest/create-item', manifestItemController.createItem )

module.exports = router;
