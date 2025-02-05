"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors")); // Use import instead of require
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 8600;
// CORS setup
app.use((0, cors_1.default)({ origin: '*' }));
app.get("/", (req, res) => {
    res.send("Service 5");
});
app.get("/service5check", (req, res) => {
    res.json({ "message": "Service 5 is up" });
});
app.get("/service5port", (req, res) => {
    res.send(`${port}`);
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
