const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/submit-marks', (req, res) => {
  // Get form data
  const { USN, CIE1, CIE2, CIE3, Quiz1, Quiz2, Quiz3, EL } = req.body;

  // Your code to interact with the database goes here
  // Example: Insert data into the database

  res.send('Marks submitted successfully');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
