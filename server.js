require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const crypto = require('crypto');

app.use(bodyParser.json());
app.use(cors());

// Create MySQL connection pool 
const pool = mysql.createPool({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASS,
  database : process.env.DB_NAME,
  port     : process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test the connection to the database
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }

  console.log('Connected to the database.');
  connection.release(); // Release the connection back to the pool
});

// Read all blogs from mysql
app.get('/readblogs', (req, res) => {
  pool.query('SELECT * FROM blogs', (error, results) => {
    if (error) {
      console.error('Error querying: ' + error.stack);
      return res.status(500).json({ error });
    }
    res.json(results);
  });
});

// Read a single blog from mysql
app.get('/readblogs/:id', (req, res) => {
  pool.query('SELECT * FROM blogs WHERE blog_id = ?', [req.params.id], (error, results) => {
    if (error) {
      console.error('Error querying: ' + error.stack);
      return res.status(500).json({ error });
    }
    res.json(results);
  });
});

// admin login verification
app.post('/adminlogin', (req, res) => {
  try {
    const password = req.body.password;
    const hash = crypto.createHash('sha256');

    //Select ID == 1 from admin table(only one admin)
    pool.query('SELECT * FROM admin WHERE id = 1', (error, results) => {
      if (error) {
        console.error('Error querying: ' + error.stack);
        return res.status(500).json({ error });
      }

      // Hash the password and compare with the one in the database
      hash.update(password);
      const hashedPassword = hash.digest('hex');
      if (hashedPassword === results[0].password) {
        console.log('Login successful.');
        res.json({ success: true });
      } else {
        console.log('Login failed.');
        res.json({ success: false });
      }
    });

  } catch (error) {
    console.error('Error: ' + error.stack);
    return res.status(500).json({ error });
  }

});


app.listen(3000);
