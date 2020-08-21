module.exports = class FetchChannelsUseCase {
    constructor({
        channelsFetcherPort,
    }) {
        this.channelsFetcherPort = channelsFetcherPort;
    }
  
    /**
     * @param {FetchChannelsCommand} command
     */
    async fetchChannels(command) {
      const channelsList = await this.channelsFetcherPort.fetchChannels(command.userId);
  
      return channelsList;
    }
};
  