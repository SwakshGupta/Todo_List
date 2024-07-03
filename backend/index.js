const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const todo = require("./routes/todo");
const auth = require("./routes/auth");
const logout = require("./routes/logout");
const cookieParser = require("cookie-parser");

require("dotenv").config(); // getting my env file

const app = express();

const databaseUrl = process.env.DATABASE_URL; // this is the database which i got from the env

// middlewares

app.use(cors());
app.use(express.json());
app.use(cookieParser());

mongoose
  .connect(databaseUrl)
  .then(() => console.log("database has been connected to the server"))
  .catch((err) => console.log("Error in the database", err));

app.get("/", (req, res) => {
  res.send("Hello");
});

// Routes

app.get("/", (req, res) => {
  res.send("hello from the server side ");
});

app.use("/api/todo", todo);
app.use("/api/user", userRoutes);
app.use("/api/auth", auth);
app.use("/api/logout", logout);

const PORT = 8001;

app.listen(PORT, () => console.log(`server has been started in plort ${PORT}`));
