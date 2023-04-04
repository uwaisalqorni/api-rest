const mysql = require('mysql');

const db = mysql.createPool({
  host: '192.168.0.191',
  user: 'afandi',
  password: 'bismillah',
  database: 'rest_api_nodejs'
});

exports.db = db;