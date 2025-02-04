import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";


dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

const cors = require("cors");
// app.use(
//   cors({
//     origin: "http://localhost:3000", // Allow Next.js frontend
//     methods: ["GET", "POST"], // Allowed request methods
//     allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
//   })
// );

app.use(cors({ origin: '*' }));

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server!!");
});

app.get("/service3check", (req: Request, res: Response) => {  
  res.json({ "message": "Service 3 is up" });
});

app.get("/service3port", (req: Request, res: Response) => {
  res.send(`${port}`);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
