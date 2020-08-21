module.exports = class UserLoginUseCase {
  constructor({
    userExistenceChackerPort,
    tokenGeneratorPort,
  }) {
    this.userExistenceChackerPort = userExistenceChackerPort;
    this.tokenGeneratorPort = tokenGeneratorPort;
  }

  /**
   * @param {UserLoginCommand} command 
   */
  async userLogin(command) {
    const isUserExists = await this.userExistenceChackerPort.findUser(command.phone, command.password);

    if (isUserExists) {
      const token = this.tokenGeneratorPort.generate(command.phone, command.password);

      return { token };
    } else {
      throw new Error('User not exists');
    }
  }
};
