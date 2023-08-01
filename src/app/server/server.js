const express = require("express");
const app = express();
var request = require("request");

app.set("port", 3000);

var mode = process.env.NODE_ENV;
const key = process.env.STEAM_KEY;
const matchToken = process.env.MATCH_TOKEN;
const baseUrl = "https://api.steampowered.com/";

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.json({
    message: "Test Boi",
  });
});

app.listen(app.get("port"), () => {
  console.log("Express started on http://localhost:" + app.get("port"));
});
