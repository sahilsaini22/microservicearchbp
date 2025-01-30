import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 7000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server!!");
});

app.get("/service2check", (req: Request, res: Response) => {
    res.send('Service 2 is up');
  });

app.get("/service2port", (req: Request, res: Response) => {
    res.send(`${port}`);
  });  

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});