require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// MySQL connection 
const connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASS,
  database : process.env.DB_NAME, // add the name of your database here
  port     : process.env.DB_PORT,
});

connection.connect(function(err) {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }

  console.log('Connected to the database.');
});

// 获取所有用户
app.get('/users', (req, res) => {
  connection.query('SELECT * FROM Users', function (error, results, fields) {
    if (error) {
      return res.status(500).json({ error });
    }
    res.json(results);
  });
});

// 创建新用户
app.post('/users', (req, res) => {
  const newUser = req.body;

  connection.query('INSERT INTO Users SET ?', newUser, function (error, results) {
    if (error) {
      return res.status(500).json({ error });
    }
    res.json({ id: results.insertId, ...newUser });
  });
});

app.listen(3000, () => console.log('Server is running on port 3000'));
