module.exports = class MessageSecondaryPortInterface {
    constructor() {
        if(!this.sendMessage) {
            throw new Error('sendMessage method is not implemented');
        }
        if(!this.fetchMessages) {
            throw new Error('fetchMessages method is not implemented');
        }
    }
};
