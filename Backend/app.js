const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDB = require("./db/db");
const userRoutes = require("./routes/user.routes");
connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("Hello World!");
});


app.use("/users", userRoutes);


module.exports = app