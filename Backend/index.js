require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express(); // Initialize the Express application
const port = process.env.PORT || 3000; // Fallback to port 3000 if PORT is not set

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json({ limit: "50mb" })); // Parse JSON requests with a body size limit
app.use(express.urlencoded({ extended: true, limit: "50mb" })); // Parse URL-encoded requests

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

app.post("/", (req, res) => {
  res.send("Post request received");
});

app.use("/api/FetchImage", require("./Cloudinary/Cloudinary"));

// Start server
app.listen(port, (err) => {
  if (err) {
    console.error("Failed to start server:", err);
  } else {
    console.log(`App is listening on port ${port}`);
  }
});
