const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.header({ auth: "abir" });
  res.json({ msg: "ok" });
});

app.listen("https://testing-ten-gules.vercel.app/", () => {
  console.log("server listening 4000......");
});
