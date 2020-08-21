module.exports = class FetchMessagesUseCase {
    constructor({
        messagesFetcherPort,
    }) {
        this.messagesFetcherPort = messagesFetcherPort;
    }
  
    /**
     * @param {FetchMessagesCommand} command
     */
    async fetchMessages(command) {
      const messages = await this.messagesFetcherPort.fetchMessages(command.channelId);
  
      return messages;
    }
};
  