const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5001;
const app = express();
const routes = require("./routes/tasks");
const cors = require("cors");
const connectDB = require("./db/connect");
// middleware
// if we dont use express.json we will have not data in req.body
app.use(express.static("./public"));
app.use(express.json());
app.use(cors());

// routes
app.use("/api/v1/tasks", routes);

const start = async () => {
  try {
    await connectDB(process.env.mongoURI);
    app.listen(port, () => {
      console.log(`App started on Port:${port}`);
    });
  } catch (err) {
    console.error(err);
  }
};
start();
