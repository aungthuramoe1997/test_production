const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "api is working",
  });
});

app.get("/user", (req, res) => {
  res.json({
    status: "success",
    message: "api is working with user route",
  });
});

app.get("/voucher", (req, res) => {
  res.json({
    status: "success",
    message: "api is working with voucher route",
  });
});

app.listen(3000, (err) => {
  if (err) {
    console.log("error ", err);
  }
  console.log("server is running at 3000");
});
