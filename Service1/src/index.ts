import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server!");
});

app.get("/service1check", (req: Request, res: Response) => {
    res.send('Service 1 is up');
  });

app.get("/service1port", (req: Request, res: Response) => {
    res.send(`${port}`);
  });  

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});