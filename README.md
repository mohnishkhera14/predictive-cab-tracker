Predictive Cab & Delivery Tracker
================================

This project provides a real‑time dashboard for tracking cabs and deliveries, with
AI‑driven ETA predictions. It uses **React** on the client side, **Node.js** and
**GraphQL** on the server side, and **WebSockets** for real‑time communication.

### Features

* **Real‑time location tracking** – display cab and delivery agent positions on a map.
* **Predictive ETA & route optimisation** – apply machine learning models and historical
  traffic data to forecast arrival times and suggest optimal routes.
* **Push notifications** – alert users about delays or route deviations.
* **REST & GraphQL APIs** – expose endpoints for integration with external systems and
  mobile apps.
* **Scalable architecture** – designed using microservices patterns, serverless functions
  and asynchronous messaging.

### Getting started

This repository is organised into two parts:

* `client/` – a React application that consumes WebSocket events and renders the
  dashboard.
* `server/` – a Node.js server that emits mock location updates via WebSockets and
  exposes GraphQL and REST APIs.

To run the demo locally:

```bash
cd client
npm install
npm start

# In a separate terminal
cd ../server
npm install
npm start
```

For production use, replace the mocked data streams with real GPS/IoT feeds and integrate
your own prediction models. Refer to `server/index.js` for guidance on emitting location
updates.
