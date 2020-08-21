module.exports = class ChannelSecondaryPortInterface {
    constructor() {
        if(!this.checkUniqueness) {
            throw new Error('checkUniqueness method is not implemented');
        }
        if(!this.createChannel) {
            throw new Error('createChannel method is not implemented');
        }
        if(!this.findChannel) {
            throw new Error('findChannel method is not implemented');
        }
        if(!this.fetchChannels) {
            throw new Error('fetchChannels method is not implemented');
        }
    }
};
