const express = require('express');

const app = express();
app.use(cors());

app.use('/login', );
app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
