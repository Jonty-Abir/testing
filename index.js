const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.header({ auth: "abir" });
  res.json({ msg: "ok" });
});

app.listen(4000, (abir) => {
  console.log("server listening 4000......");
});
