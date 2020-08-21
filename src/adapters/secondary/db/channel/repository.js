const Channel = require('./entity');

const ChannelSecondaryPortInterface = require('../../../../ports/secondary/channel.port');

class ChannelRepository extends ChannelSecondaryPortInterface {
    async checkUniqueness(name) {
        const count = await Channel.count({ where: { name } });

        return count === 0;
    }

    createChannel(name, description) {
        return Channel.create({ name, description })
            .then(ch => JSON.stringify(ch));
    }
    findChannel(id) {
        return Channel.findById(id);
    }
    fetchChannels(userId) {
        return Channel.findAll({ where: { userId } });
    }
}

module.exports = new ChannelRepository();
