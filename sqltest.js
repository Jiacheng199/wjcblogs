require('dotenv').config();

var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASS,
  port     : process.env.DB_PORT,
  connectTimeout : 10000  // 这里设置连接超时为10000毫秒
});

connection.connect(function(err) {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }

  console.log('Connected as id ' + connection.threadId);
  // your code here
});



connection.end();
