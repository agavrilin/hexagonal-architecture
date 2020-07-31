const userRepository = require('../../adapters/secondary/db/user/repository.js');
const userService = require('./service');

const service = userService(userRepository);

class UserController {
    registration(req, res) {
        // some logic
        service.registration();

        return res.json({ token: '123123123' });
    }
}

const userController = new UserController();

module.exports = userController;