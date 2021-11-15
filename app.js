const express = require("express");
//creating app
const app = express();
//send an HTTP response when receiving HTTP GET /
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile("public/index.html", { root: __dirname });
});
//make the app listen on port
const port = process.argv[2] || process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Cart app listening at http://localhost:${port}`);
});
