import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors"; // Use import instead of require

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8500;

// CORS setup
app.use(cors({ origin: '*' }));

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server!!");
});

app.get("/service4check", (req: Request, res: Response) => {  
  res.json({ "message": "Service 4 is up" });
});

app.get("/service4port", (req: Request, res: Response) => {
  res.send(`${port}`);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
