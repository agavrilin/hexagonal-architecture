'use strict';

const { Router } = require('express');
const CreateChannelUseCase = require('../../../domain-logic/create-channel/index');
const CreateChannelCommand = require('../../../domain-logic/create-channel/command');

const JoinChannelUseCase = require('../../../domain-logic/join-channel/index');
const JoinChannelCommand = require('../../../domain-logic/join-channel/command');

const FetchChannelsUseCase = require('../../../domain-logic/fetch-channels/index');
const FetchChannelsCommand = require('../../../domain-logic/fetch-channels/command');

const channelDbAdapter = require('../../secondary/db/channel/repository');

const router = new Router();

router.post('/channel', createChannel);
router.get('/channel', fetchChannels);
router.post('/channel/:id/join', joinChannel);

module.exports = router;

function createChannel(req, res, next) {
    const useCase = new CreateChannelUseCase({
        channelUniquenessCheckPort: channelDbAdapter,
        channelCreatePort: channelDbAdapter,
    });

    const command = new CreateChannelCommand(req.body.name, req.body.description);

    useCase.createChannel(command)
        .then(res.json)
        .catch(next);
}

function fetchChannels(req, res) {
    const useCase = new FetchChannelsUseCase({
        channelsFetcherPort: channelDbAdapter,
    });

    const command = new FetchChannelsCommand(req.body.userId);

    useCase.fetchChannels(command)
        .then(res.success)
        .catch(error => res.status(400).send(error));
}

function joinChannel(req, res) {
    const useCase = new JoinChannelUseCase({
        channelsFetcherPort: channelDbAdapter,
    });

    const command = new JoinChannelCommand(req.params.id, req.body.userId);

    useCase.joinChannel(command)
        .then(res.success)
        .catch(error => res.status(400).send(error));
}
