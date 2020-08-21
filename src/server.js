const express = require('express');
const cors = require('cors');

const db = require('./adapters/secondary/db');
const userRouter = require('./adapters/primary/api/user');
const channelRouter = require('./adapters/primary/api/channel');
const messageRouter = require('./adapters/primary/api/message');

const app = express();

app.use(cors());
app.use(express.json());


app.use(userRouter);

app.use();

app.use(channelRouter);
app.use(messageRouter);

db.sequelize.sync().then(() => app.listen(8080));
