const express = require('express');
const path = require('path');
const env = require('dotenv');
env.config();
const connectDB = require('./helper/databaseConnection');
const { startScheduler } = require('./helper/scheduler');
const routes = require('./routes/routes');

const app = express();

// Middleware to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "uploads" directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Connect to MongoDB
connectDB();

// Start Scheduler
startScheduler();

// Use routes
app.use('/', routes);

app.listen(process.env.PORT, () => {
  console.log('Listening on port ',process.env.PORT);
});