require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const crypto = require('crypto');

app.use(bodyParser.json());
app.use(cors());

// MySQL connection 
const connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASS,
  database : process.env.DB_NAME,
  port     : process.env.DB_PORT,
});

connection.connect(function(err) {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }

  console.log('Connected to the database.');

});

//read all blogs from mysql
app.get('/readblogs', (req, res) => {
  connection.query('SELECT * FROM blogs', (error, results) => {
    if (error) {
      console.error('Error querying: ' + error.stack);
      return res.status(500).json({ error });
    }
    res.json(results);
  });
});

//read a single blog from mysql
app.get('/readblogs/:id', (req, res) => {
  connection.query('SELECT * FROM blogs WHERE blog_id = ?', [req.params.id], (error, results) => {
    if (error) {
      console.error('Error querying: ' + error.stack);
      return res.status(500).json({ error });
    }
    res.json(results);
  });
});


app.listen(3000, () => console.log('Server is running on port 3000'));
