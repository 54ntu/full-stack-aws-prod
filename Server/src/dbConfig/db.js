const mongoose = require("mongoose");
const { envConfig } = require("../config/config");

const connectDB = async () => {
  try {
    await mongoose.connect(`${envConfig.MONGODB_URL}`);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("mongoDB connection failed", error);
    process.exit(1);
  }
};

module.exports = { connectDB };
