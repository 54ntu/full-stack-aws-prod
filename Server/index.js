require("dotenv").config();
const { app } = require("./app");
const { envConfig } = require("./src/config/config");
const { connectDB } = require("./src/dbConfig/db");

app.get("/api/message", (req, res) => {
  res.json({ message: "hello from backend" });
});

app.get("/api/data", (req, res) => {
  res.json({ data: "this is some raw data from backend" });
});

// connectDB()
//   .then(() => {
//     app.listen(envConfig.port, () => {
//       console.log(`server is listening on port ${envConfig.port}`);
//     });
//   })
//   .catch((error) => {
//     console.error("Failed to connect to the database", error);
//   });
app.listen(envConfig.port, () => {
  console.log(`server is listening on port ${envConfig.port}`);
});
