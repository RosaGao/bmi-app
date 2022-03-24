const path = require("path");
const express = require("express");
const app = express();

const port = process.env.PORT || 4000;

app.get("/", (req, res)=>{
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, ()=>{
  console.log(`Express app listening at http://localhost:${port}`);
});
