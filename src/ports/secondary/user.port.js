module.exports = class UserSecondaryPortInterface {
    constructor() {
        if(!this.checkUniqueness) {
            throw new Error('checkUniqueness method is not implemented');
        }
        if(!this.findUser) {
            throw new Error('findUser method is not implemented');
        }
        if(!this.save) {
            throw new Error('save method is not implemented');
        }
    }
};
