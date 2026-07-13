const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-user", (req, res, next) => {
  res.send(
    "<div> <h1>Add user </h1> <form action='/users' method='POST'> <input type='text' name='username'/> <button type='submit'> Add </button> </form> </div>",
  );
});

app.post("/users", (req, res, next) => {
  console.log(
    `User: ${req.body.username} has been added, redirecting to homepage...`,
  );
  //   res.send(`<h1> User ${req.body.username} added.`);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Default route</h1>");
});

app.listen(3000);
