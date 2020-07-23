const userRegistration = require('./user-registration');

module.exports = (repository) => {
    return {
        registration: userRegistration(repository),
    };
};