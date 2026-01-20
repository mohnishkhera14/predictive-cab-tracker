const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

// Sample route
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Sample emit to connected clients
setInterval(() => {
  const locationUpdate = {
    id: 1,
    lat: Math.random() * 90,
    lng: Math.random() * 180,
    timestamp: Date.now()
  };
  io.emit('locationUpdate', locationUpdate);
}, 5000);

io.on('connection', (socket) => {
  console.log('A user connected');
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
