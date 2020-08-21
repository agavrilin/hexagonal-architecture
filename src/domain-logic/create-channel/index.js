module.exports = class CreateChannelUseCase {
    constructor({
        channelUniquenessCheckPort,
        channelCreatePort
    }) {
        this.channelUniquenessCheckPort = channelUniquenessCheckPort;
        this.channelCreatePort = channelCreatePort;
    }
  
    /**
     * @param {CreateChannelCommand} command 
     * @throws {Error} channel already exists
     */
    async createChannel(command) {
      const isChannelUnique = await this.channelUniquenessCheckPort.checkUniqueness(command.name);
  
      if (isChannelUnique) {
        const channel = await this.channelCreatePort.createChannel(command.name, command.description);
        return channel;
      } else {
        throw new Error('Channel already exists');
      }
    }
};
  