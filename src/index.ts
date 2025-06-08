import express, { Express, Response, Request, Application } from "express";
import cors from "cors";
import dotenv from "dotenv";

//dotenv cofig

dotenv.config();
const app = express();

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("This is fucking awasome");
});

const port = process.env.PORT || 1905;
app.listen(port, () => {
  console.log(`The app is listening on the port ${port}`);
});
