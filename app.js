// app.js

// Import the required modules
const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Parse incoming JSON data
app.use(express.json());

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define a route for the /api/hello endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});

// Define a route for the /api/users endpoint
app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  // Here, you can save the user data to a database or perform other operations
  res.status(201).json({ name, email });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});