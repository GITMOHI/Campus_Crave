const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: "myuser",
  host: "postgres", // This should match the name of the postgres service in Docker Compose
  database: "campus_crave_db",
  password: "mypassword",
  port: "5432",
});

pool.connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch(err => console.error("Connection error", err));

app.get("/", (req, res) => {
  res.send("Backend is running fine okay!");
});

app.get('/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()'); // Use pool.query instead of db.query
    res.json({ message: 'Connection successful', time: result.rows[0] });
  } catch (error) {
    res.status(500).json({ message: 'Database connection failed', error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
