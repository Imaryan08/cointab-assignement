// app.post('/login', (req, res) => {
//     // Handle login request here
//     res.json({ message: 'Login successful!' });
//   });

const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "cointab",
  database: "nodejs",
});

// db connection

connection.connect(function (error) {
  if (error) throw error;
  else console.log("connected to the database successfullty");
});
