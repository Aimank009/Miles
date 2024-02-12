const express = require("express");

const morgan = require("morgan");

const rateLimit = require("express-rate-limit");

const helmet = require("helmet"); //secure the server by setting various headers !

const mongosanitize = require("express-mongo-sanitize"); //to prevent any mongodb operator

const bodyparser = require("body-parser");

const xss = require("xss");

const cors = require("cors");

const app = express();

//setting up middlewares !
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(mongosanitize());

app.use(
  cors({
    origin: "*",

    methods: ["GET", "PATCH", "POST", "DELETE", "PUT"],

    credentials: true, //
  })
);

app.use(express.json({ limit: "10kb" }));

app.use(bodyparser.json());

app.use(bodyparser.urlencoded({ extended: true }));

app.use(helmet());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const limiter = rateLimit({
  max: 3000,
  windowMs: 60 * 60 * 1000, //in one hour ! since it records in ms,
  message: "too many requests ! try again in one hour ",
});

app.use("/twak", limiter);

// app.use(xss());

module.exports = app;
