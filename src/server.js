const express = require('express');
const cors = require('cors');

const db = require('./adapters/secondary/db');
const appRouter = require('./adapters/primary/api');

const app = express();

app.use(cors());
app.use(express.json());

app.use(appRouter);
// app.use('/', (req, res) => res.json({ hello: 'there' }));

db.sequelize.sync().then(() => app.listen(8080));
