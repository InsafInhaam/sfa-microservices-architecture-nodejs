const express = require("express");
const app = express();
const PORT = 4002;

// Simple route to test the listing-service
app.get("/", (req, res) => {
  res.send("Hello from the Listing Service!");
});

app.listen(PORT, () => {
  console.log(`User Service is running on http://localhost:${PORT}`);
});
