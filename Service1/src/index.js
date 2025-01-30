const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});

app.get('/servicecheck', (req, res) => {
  res.send('Service 1 is up');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});