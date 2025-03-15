const express = require("express");
const cors = require("cors");
const pool = require("./db"); // Import database connection
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route to Check Database Connection
app.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ message: "✅ Database connected successfully!", time: result.rows[0] });
  } catch (error) {
    res.status(500).json({ message: "❌ Database connection failed", error: error.message });
  }
});

// Example API Route
app.get("/", (req, res) => {
  res.send("🚀 Backend is running!");
});

// Server Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
