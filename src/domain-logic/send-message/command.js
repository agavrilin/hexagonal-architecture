class SendMessageCommand {
    constructor(channelId, userId, text) {
      this.channelId = channelId;
      this.userId = userId;
      this.text = text;
    }
  }
    
  module.exports = SendMessageCommand;