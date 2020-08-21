'use strict';

const { Router } = require('express');
const SendMessageUseCase = require('../../../domain-logic/send-message/index');
const SendMessageCommand = require('../../../domain-logic/send-message/command');

const FetchMessagesUseCase = require('../../../domain-logic/fetch-messages/index');
const FetchMessagesCommand = require('../../../domain-logic/fetch-messages/command');

const userDbAdapter = require('../../secondary/db/user/repository');
const channelDbAdapter = require('../../secondary/db/channel/repository');
const messageDbAdapter = require('../../secondary/db/message/repository');

const router = new Router();

router.post('/channel/:id/message', sendMessage);
router.get('/channel/:id/message', fetchMessages);

module.exports = router;

function sendMessage(req, res) {
    const useCase = new SendMessageUseCase({
        channelUniquenessCheckPort: channelDbAdapter,
        channelCreatePort: channelDbAdapter,
        userExistenceCheckerPort: userDbAdapter,
        channelExistenceCheckerPort: channelDbAdapter,
        messageSenderPort: messageDbAdapter,

    });

    const command = new SendMessageCommand(req.params.id, req.body.userId, req.body.text);

    useCase.sendMessage(command)
        .then(res.success)
        .catch(error => res.status(400).send(error));
}

function fetchMessages(req, res) {
    const useCase = new FetchMessagesUseCase({
        messagesFetcherPort: messageDbAdapter,
    });

    const command = new FetchMessagesCommand(req.params.id);

    useCase.fetchMessages(command)
        .then(res.success)
        .catch(error => res.status(400).send(error));
}
