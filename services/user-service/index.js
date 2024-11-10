const express = require("express");
const app = express();
const PORT = 4001;

// Simple route to test the user-service
app.get("/", (req, res) => {
  res.send("Hello from the User Service!");
});

// A route to simulate getting user data
app.get("/users", (req, res) => {
  res.json({
    users: [
      { id: 1, name: "insaf" },
      { id: 2, name: "amaan" },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`User Service is running on http://localhost:${PORT}`);
});
