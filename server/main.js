const express = require('express');
const mysql = require('mysql2');

const app = express();

var con = mysql.createConnection({
  host: "localhost",
  user: "todo",
  password: "todo",
  port: 3000,
  database: "coffeetimedb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
})
