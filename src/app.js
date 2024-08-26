const express = require('express');
const app = express();

// global middleware to accept json data
app.use(express.json());



// health check
app.get("/", (req, res) => {
    res.json ({ message: "server is live"});
});

module.exports = app;