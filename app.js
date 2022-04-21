import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res
    .status(200)
    .send("<h1>Hello From Nodejs&Express Server With Babel And ES6</h1>");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`running on port ${port}`));
