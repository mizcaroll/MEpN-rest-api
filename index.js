const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
const app = express();
app.use(express.json());

const url = "mongodb://localhost/aliendb";

mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology:true});
const con = mongoose.connection;

con.on("open", () => {
  console.log("database connected...");
});

const alienRouter = require("./routes/aliens");
app.use("/aliens", alienRouter);

const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
  });
  