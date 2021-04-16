const express = require("express");
const request = require("request");
const port = process.env.PORT || 3001;

require("dotenv").config();
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/search", (req, res) => {
  const query = req.query.q;
  request(
    { url: `https://api.deezer.com/search?q=${query}` },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: "error", message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.get("/tracks", (req, res) => {
  const query = req.query.q;
  request(
    { url: `https://api.deezer.com/album/${query}/tracks` },

    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: "error", message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});
app.listen(port, () => console.log(`listening on ${port}`));
