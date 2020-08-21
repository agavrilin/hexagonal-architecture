const Message = require('./entity');

const MessageSecondaryPortInterface = require('../../../../ports/secondary/message.port');

class MessageRepository extends MessageSecondaryPortInterface {
    sendMessage(channelId, userId, text) {
        return Message.create({ channelId, userId, text });
    }

    fetchMessages(channelId) {
        return Message.findAll({ where: { channelId } });
    }
}

module.exports = new MessageRepository();
