import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors"; // Use import instead of require

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8600;

// CORS setup
app.use(cors({ origin: '*' }));

app.get("/", (req: Request, res: Response) => {
  res.send("Service 5");
});

app.get("/service5check", (req: Request, res: Response) => {  
  res.json({ "message": "Service 5 is up" });
});

app.get("/service5port", (req: Request, res: Response) => {
  res.send(`${port}`);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
