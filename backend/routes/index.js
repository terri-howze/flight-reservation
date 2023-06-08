//import viewsRoutes and inv-router here
const router = require('express').Router();
const {resolve} = require('path');
const apiRoute = require('./api/api-router');
const flightapi = require('./api/flightapi');
const viewRoutes = require('./views/view-router');
router.use('/api/inv-router', apiRoute);
router.use('/users', apiRoute);
router.use('/flight', flightapi);
//router.use('/manage', apiRoute);
//router.use('/', viewRoutes);



module.exports = router;