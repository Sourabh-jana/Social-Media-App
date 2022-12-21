const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

if(process.env.NODE_ENV !== "production") {
    require('dotenv').config({ path: 'Backend/configs/config.env'});
}

// Using middlewares
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// importing routes
const post = require("./routes/post");
const user = require("./routes/user");

// Using routes
app.use("/api/v1", post);
app.use("/api/v1", user);

module.exports = app;