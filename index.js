const express = require('express')

const server = express();

const PORT = 5000;

const planttypes = []

server.get("/",(req, res) => {
    res.json({hello: "world"});
});

server.get("/hello", (req, res) => {
    res.json({hello: "future senior softwar developer"});
});

server.post("/api/channels", (req, res) => {
  const plantinfo = req.body;
})

server.listen(5000, () => {
    console.log(`\n***  Server Running on http://localhost:${PORT}`);
});