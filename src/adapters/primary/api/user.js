'use strict';

const { Router } = require('express');
const userDbAdapter = require('../../secondary/db/user/repository');
const tokenDbAdapter = require('../../secondary/token/adapter');

const UserRegistrationUseCase = require('../../../domain-logic/user-registration/index');
const UserRegistrationCommand = require('../../../domain-logic/user-registration/command');

const UserLoginUseCase = require('../../../domain-logic/user-login/index');
const UserLoginCommand = require('../../../domain-logic/user-login/command');

const router = new Router();

router.post('/register', userRegistration);
router.post('/login', userLogin);

module.exports = router;

async function userRegistration(req, res) {
  const { phone, password, country, name, bio, email } = req.body;

  const useCase = new UserRegistrationUseCase({
    userUniquenessCheckerPort: userDbAdapter,
    tokenGeneratorPort: tokenDbAdapter,
    userSaverPort: userDbAdapter,
  });
  const command = new UserRegistrationCommand(phone, password, country, name, bio, email);
  const user = await useCase.userRegistration(command);

  return res.json(user);
}


function userLogin(req, res) {
  const { phone, password } = req.body;

  const useCase = new UserLoginUseCase({
    userExistenceChackerPort: userDbAdapter,
    tokenGeneratorPort: tokenDbAdapter,
  });
  const command = new UserLoginCommand(phone, password);
  useCase.userLogin(command)
    .then(res.json);
}