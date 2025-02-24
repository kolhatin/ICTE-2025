const express = require('express');
const http = require('http');

const https = require('node:https');
const fs = require('node:fs');
const options = {
  key: fs.readFileSync('private.key'),
  cert: fs.readFileSync('cert.crt'),
};

const { Server } = require('socket.io');
const { v4: uuidv4 } = require('uuid');

const app = express();
const server = https.createServer(options,app);
const io = new Server(server);

const PORT = 3000;
const races = {};

// Статическая папка
app.use(express.static('public'));



server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
