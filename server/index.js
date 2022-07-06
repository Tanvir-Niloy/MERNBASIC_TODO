const colors = require("colors");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");
dotenv.config();
connectDB();

//import router
const router = require("./routes/router");

const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

app.use(router);

app.get("/", (req, res) => {
  res.send("api is running....");
});

const port = process.env.PORT || 7000;
app.listen(
  port,
  console.log(`server is running on port ${port}`.bgYellow.bold)
);
