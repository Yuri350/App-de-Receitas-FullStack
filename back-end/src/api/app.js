const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.use('/login', (_req, res) => res.status(201));
app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
