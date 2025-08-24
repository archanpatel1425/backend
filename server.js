// index.js
const express = require("express");
const app = express();
const PORT = 3000;

// Simple GET API
app.get("/", (req, res) => {
  res.send("Hello, this is a basic GET API!");
});

// Another GET route with params
app.get("/user/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}! Welcome to the API.`);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
