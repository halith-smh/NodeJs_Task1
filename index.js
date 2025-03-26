const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const taskRouter = require("./routes/task.router.js");

dotenv.config();
const app = express();

const PORT = 4000;
const MONGO_DB_URI = process.env.MONGODB_URI;

// Middleware
app.use(express.json());

app.use("/api/v1/tasks", taskRouter);

app.listen(PORT, () => {
  mongoose.connect(MONGO_DB_URI).then(() => {
    console.log(`Server is running on http://localhost:${PORT} & MondoDB Connected...`);
  }).catch((err) => {
    console.error("Error: " + err.message);
  })
});
