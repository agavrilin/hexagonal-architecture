module.exports = class UserRegistrationUseCase {
  constructor({
    userUniquenessCheckerPort,
    tokenGeneratorPort,
    userSaverPort,
  }) {
    this.userUniquenessCheckerPort = userUniquenessCheckerPort;
    this.userSaverPort = userSaverPort;
    this.tokenGeneratorPort = tokenGeneratorPort;
  }

  /**
   * @param {UserRegistrationCommand} command 
   * @throws {Error} user already exists
   */
  async userRegistration(command) {
    const isUserUnique = await this.userUniquenessCheckerPort.checkUniqueness(command.email, command.phone);

    if (isUserUnique) {
      const user = await this.userSaverPort.save(command);
      const token = this.tokenGeneratorPort.generate(command.phone, command.password);

      return { ...user, token };
    } else {
      throw new Error('User already exists');
    }
  }
};
