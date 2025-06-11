const express = require('express');
const app = express();
const v1Routes = require('./routes/api/v1');
const v2Routes = require('./routes/api/v2');
const errorHandler = require('./middleware/errorHandler');

// Middleware
app.use(express.json());

// API Routes
app.use('/api/v1', v1Routes);
app.use('/api/v2', v2Routes);

// Error handling middleware
app.use(errorHandler);

module.exports = app;