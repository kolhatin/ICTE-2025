const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const { v4: uuidv4 } = require('uuid');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = 3000;
const races = {};

// Статическая папка
app.use(express.static('public'));



server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
