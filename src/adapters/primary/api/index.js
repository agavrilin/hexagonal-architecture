const { Router } = require('express');

const user = require('./user/controller');

const router = new Router();

router.post('/user/signup', user.registration);

module.exports = router;
