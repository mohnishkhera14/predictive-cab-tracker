import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

// Connect to the WebSocket server on the same host.
const socket = io();

function App() {
  const [locations, setLocations] = useState({});

  useEffect(() => {
    // Listen for location updates from the server.
    socket.on('locationUpdate', (data) => {
      setLocations((prev) => ({ ...prev, [data.id]: data }));
    });
    return () => {
      socket.off('locationUpdate');
    };
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Predictive Cab & Delivery Tracker</h1>
      <p>This dashboard will display real‑time locations and ETAs.</p>
      <pre>{JSON.stringify(locations, null, 2)}</pre>
    </div>
  );
}

export default App;
