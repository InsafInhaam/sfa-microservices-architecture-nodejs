const express = require("express");
const app = express();
const PORT = 4003;

// Simple route to test the orders-service
app.get("/", (req, res) => {
  res.send("Hello from the Order Service!");
});

app.listen(PORT, () => {
  console.log(`User Service is running on http://localhost:${PORT}`);
});
