const express = require('express');
const server = express();

require('dotenv').config();

const port = process.env.PORT || 8080;

server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

server.use('*', (req, res) => {
    res.send("It's alive!!");
});