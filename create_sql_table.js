var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'wjcblogs-database.cjpagjgipj6d.ap-southeast-2.rds.amazonaws.com',
  user     : 'admin', // 更换为你的用户名
  password : 'Lord8410195639', // 更换为你的密码
  port     : 3306,
  database : 'wjcblogs',
  connectTimeout : 10000  // 这里设置连接超时为10000毫秒
});

connection.connect(function(err) {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }
  console.log('Connected as id ' + connection.threadId);
});



var createUsersTable = `CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_admin BOOLEAN DEFAULT 0
)`;

connection.end();
