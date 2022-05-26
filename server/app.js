const fs = require('fs');
const express = require('express');
const dotenv = require('dotenv');

// * ---------- CONFIG ----------
dotenv.config({ path: './config.env' });
const app = express();
// express middleware
app.use(express.json());

// * ---------- VARIABLES ----------
const projects = JSON.parse(fs.readFileSync(`${__dirname}/./data/projects.json`));

// * ---------- ROUTES ----------
app.get('/', (req, res) => {
  res.status(200).send('Server running');
});

app.get('/api', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Hello from server',
  });
});

app.get('/api/projects', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      projects,
    },
  });
});

// * ---------- SERVER ----------
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
