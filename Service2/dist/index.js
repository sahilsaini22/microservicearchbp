"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 7000;
const cors = require("cors");
app.use(cors({
    origin: "http://localhost:3000", // Allow Next.js frontend
    methods: ["GET", "POST"], // Allowed request methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
}));
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server!!");
});
app.get("/service2check", (req, res) => {
    res.json({ "message": "Service 2 is up..." });
});
app.get("/service2port", (req, res) => {
    res.send(`${port}`);
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
