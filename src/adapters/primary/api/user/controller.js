const userRepository = require('../../../secondary/db/user/repository');
const userService = require('../../../../domains/user/service');

class UserController {
    constructor(userRepository) {
        this.userService = userService(userRepository);
    }

    registration(req, res) {
        // some logic
        this.userService.registration();

        return res.json({ token: '123123123' });
    }
}

module.exports = new UserController(userRepository);