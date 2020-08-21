module.exports = class JoinChannelUseCase {
    constructor({
        userExistenceCheckerPort,
        channelExistenceCheckerPort,
        channelJoinPort,
    }) {
        this.userExistenceCheckerPort = userExistenceCheckerPort;
        this.channelExistenceCheckerPort = channelExistenceCheckerPort;
        this.channelJoinPort = channelJoinPort;
    }
  
    /**
     * @param {JoinChannelCommand} command
     */
    async joinChannel(command) {
      const user = await this.userExistenceCheckerPort.findUser(command.userId);  
      const channel = await this.channelExistenceCheckerPort.findChannel(command.channelId);  

      if (user && channel) {
        await this.channelJoinPort.joinChannel(command.channelId, command.userId);

        return channel.id;
      } else {
        throw new Error('User or CHannel not exists');
      }
    }
};
  