const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded();


const app = express();

app.use("/assets", express.static("assets"));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "nodejs",
});

// db connection

connection.connect(function (error) {
  if (error) throw error;
  else console.log("connected to the database successfullty");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", encoder, (req, res) => {
  var username = req.body.username;
  var password = req.body.password;

  connection.query(
    "SELECT * FROM loginuser where user_name = ? and user_pass = ?",
    [username, password],
    function (err, results, fields) {
      if (results.length > 0) {
        res.redirect("/welcome");
      } else {
        res.redirect("/");
      }
      res.end();
    }
  );
});

//when login is successful>
app.get("/welcome", (req, res) => {
  res.sendFile(__dirname + "/welcome.html");
});
app.listen(4500);
