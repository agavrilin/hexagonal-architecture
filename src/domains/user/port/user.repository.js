module.exports = class UserRepositoryInterface {
    constructor() {
        if(!this.findOne) {
            throw new Error('findOne method is not implemented');
        }
        if(!this.findByPk) {
            throw new Error('findByPk method is not implemented');
        }
        if(!this.find) {
            throw new Error('find method is not implemented');
        }
        if(!this.create) {
            throw new Error('create method is not implemented');
        }
    }
};
