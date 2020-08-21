module.exports = class SendMessageUseCase {
    constructor({
        userExistenceCheckerPort,
        channelExistenceCheckerPort,
        messageSenderPort,
    }) {
        this.userExistenceCheckerPort = userExistenceCheckerPort;
        this.channelExistenceCheckerPort = channelExistenceCheckerPort;
        this.messageSenderPort = messageSenderPort;
    }
  
    /**
     * @param {SendMessageCommand} command
     */
    async sendMessage(command) {
      const user = await this.userExistenceCheckerPort.findUser(command.userId);  
      const channel = await this.channelExistenceCheckerPort.findChannel(command.channelId);  

      if (user && channel) {
        await this.messageSenderPort.sendMessage(command.channelId, command.userId, command.text);

        return channel.id;
      } else {
        throw new Error('User or CHannel not exists');
      }
    }
};
  