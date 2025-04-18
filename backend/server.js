const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');            // enable CORS for dev
require('dotenv').config();             // load variables from .env

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());  // parse JSON request bodies

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))  
  .catch(err => console.error('Mongo connection error:', err));

// Routes
app.get('/', (req, res) => {
  res.send('Portfolio API is running');       // simple test route
});

// Attach routes for API
const projectsRoutes = require('./routes/projects');
const contactRoutes = require('./routes/contact');

app.use('/api/projects', projectsRoutes);
app.use('/api/contact', contactRoutes);

// For Vercel serverless deployment
if (process.env.NODE_ENV === 'production') {
  // Create handler for serverless environments
  const serverlessHandler = app;
  module.exports = serverlessHandler;
} else {
  // Start the server for local development
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
