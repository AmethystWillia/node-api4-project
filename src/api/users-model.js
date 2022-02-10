const db = require('../../data/db-config');

function get() {
    return db('users');
}

function register(user) {
    return db('users')
        .then(user);
}

function login(user) {
    return db(user)
        .then(user);
}

module.exports = {
    get,
    register,
    login,
};