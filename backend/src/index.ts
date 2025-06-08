import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { log } from "console";

dotenv.config();
const app = express();

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("This is call request say hi");
  console.log("The get api is working fine");
});

const port = process.env.PORT || 2017;

app.listen(port, () => {
  log(`The Server is running on the port ${port}`);
});
