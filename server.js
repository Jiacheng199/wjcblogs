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

// get all users
app.get('/users', (req, res) => {
  connection.query('SELECT * FROM Users', function (error, results, fields) {
    if (error) {
      return res.status(500).json({ error });
    }
    res.json(results);
  });
});

// create a new user 
app.post('/users', (req, res) => {
  const newUser = req.body;

  connection.query('INSERT INTO Users SET ?', newUser, function (error, results) {
    if (error) {
      return res.status(500).json({ error });
    }
    res.json({ id: results.insertId, ...newUser });
  });
});

// 用户验证
app.post('/userlogin', (req, res) => {
  const userCredentials = req.body;

  connection.query('SELECT * FROM Users WHERE email = ?', userCredentials.email, function (error, results) {
    if (error) {
      return res.status(500).json({ error });
    }
    
    const hashedPassword = crypto.createHash('sha256').update(userCredentials.password).digest('hex');


    // 确认查询结果是否存在并且密码是否匹配
    if (results.length > 0 && results[0].password === hashedPassword) {
      res.json({ success: true, message: '登录成功！' });
    } else {
      res.json({ success: false, message: '无效的用户名或密码！' });
    }
  });
});


app.listen(3000, () => console.log('Server is running on port 3000'));
