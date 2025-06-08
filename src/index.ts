import express, { Express, Response, Request, Application } from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("This is fucking awasome");
});

const port = 3023;
app.listen(port, () => {
  console.log(`The app is listening on the port ${port}`);
});
