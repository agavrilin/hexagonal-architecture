const User = require('./entity');

const UserSecondaryPortInterface = require('../../../../ports/secondary/user.port');

class UserRepository extends UserSecondaryPortInterface {
    async checkUniqueness(email, phone) {
        const user = await User.findOne({ where: { email, phone } });

        if (user) {
            return false;
        }

        return true;
    }

    findUser(email, phone) {
        return User.findOne({ where: { email, phone } });
    }

    save(data) {
        return User.create(data);
    }
}

module.exports = new UserRepository();
