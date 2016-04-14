'use strict';
var router = require('express').Router();
module.exports = router;

router.use('/members', require('./members'));
router.use('/apis',require('./apis'))
router.use('/random', require('./random'))
router.use('/favorites', require('./favorites'))
router.use('/ideas', require('./ideas'))
router.use('/user', require('./user'))

// Make sure this is after all of
// the registered routes!
router.use(function (req, res) {
    res.status(404).end();
});
