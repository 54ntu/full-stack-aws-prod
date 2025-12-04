const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",

      //we need to add production url here later once frontend is deployed
    ],
    credentials: true,
  })
);

module.exports = { app };
