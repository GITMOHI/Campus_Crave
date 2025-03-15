const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
require("dotenv").config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Database connection 
const pool = new Pool({
  user: process.env.DB_USER,        
  host: process.env.DB_HOST,        
  database: process.env.DB_NAME,    
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,        
});

pool.connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch(err => console.error("Connection error", err));


// app.get('/test-db', async (req, res) => {
//    try {
//      const result = await pool.query('SELECT NOW()'); // Use pool.query instead of db.query
//      res.json({ message: 'Connection successful', time: result.rows[0] });
//     } catch (error) {
//       res.status(500).json({ message: 'Database connection failed', error: error.message });
//     }
// });




// //routes...  
// const authRoutes = require("./routes/authRoutes");
// app.use("/api/v1.0/auth", authRoutes);







const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
