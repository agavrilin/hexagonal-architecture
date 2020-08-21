const jwt = require('jsonwebtoken');

const PRIVATE_KEY = 'key';

module.exports = {
    generate: (...args) => jwt.sign({ ...args }, PRIVATE_KEY),
    verify: (token) => jwt.verify(token, PRIVATE_KEY)
};
