const express = require("express");
const mongoose = require("mongoose");

// To find out the path for registration
const path = require("path");

const app = express();

const port = process.env.port || 8001;

// To find out the exact path location for registration folder in frontend folder
const static_path = path.join(
  __dirname,
  "../shopping-website/src/components/Register/Register.js"
);

// console.log(
//   path.join(
//     __dirname,
//     "../shopping-website/src/components/Register/Register.js"
//   )
// );
// Middleware
app.use(express.static(static_path));

const connection_url = "mongodb://localhost:27017/ShoppingCartRegistration";

mongoose
  .connect(connection_url)
  .then(() => {
    console.log("Connection succcesful");
  })
  .catch((err) => console.log("No connection"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`server is running at port no ${port}`);
});
