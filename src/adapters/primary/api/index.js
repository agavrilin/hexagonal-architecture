const { Router } = require('express');

const user = require('../../../domains/user/controller');

const router = new Router();

router.post('/user/signup', user.registration);
router.get('/user/signup', user.registration);

module.exports = router;
