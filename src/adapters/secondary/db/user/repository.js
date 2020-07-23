const User = require('./entity');

const UserRepositoryInterface = require('../../../../domains/user/port/user.repository');

class UserRepository extends UserRepositoryInterface {
    findOne(query) {
        return User.findOne(query);
    }

    findByPk(pk) {
        return User.findByPk(pk);
    }

    find(query) {
        return User.findAll(query);
    }

    create(data) {
        return User.create(data);
    }
}

module.exports = new UserRepository();
