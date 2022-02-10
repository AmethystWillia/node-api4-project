const express = require('express');

const server = express();

const Users = require('./users-model');

server.get('/api/users', (req, res, next) => {
    Users.get()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            next(err);
        })
});

server.post('/api/register', (req, res, next) => {
    const { username, password } = req.body;

    Users.register({ username, password })
        .then(user => {
            res.status(201).json(user);
        })
        .catch(err => {
            next(err);
        })
});

server.post('api/login', (req, res, next) => {
    const { username, password } = req.body;

    Users.login({ username, password })
        .then(user => {
            res.status(201).json(user);
        })
        .catch(err => {
            next(err);
        })
});

module.exports = server;