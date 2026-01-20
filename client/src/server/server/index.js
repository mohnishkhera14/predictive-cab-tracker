const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*' },
});

// Example: broadcast random location updates every 3 seconds.
setInterval(() => {
  const id = Math.floor(Math.random() * 10);
  const data = {
    id,
    lat: 12.9716 + (Math.random() - 0.5) * 0.1,
    lng: 77.5946 + (Math.random() - 0.5) * 0.1,
    eta: Math.floor(Math.random() * 30) + 5,
  };
  io.emit('locationUpdate', data);
}, 3000);

// Example REST endpoint
app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Predictive tracker server listening on port ${PORT}`);
});
