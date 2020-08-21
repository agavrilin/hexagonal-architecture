class UserRegistrationCommand {
  constructor(phone, password, country, name, bio, email) {
    this.phone = phone;
    this.password = password;
    this.country = country;
    this.name = name;
    this.bio = bio;
    this.email = email;
  }
}

module.exports = UserRegistrationCommand;