require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');
const ApiError = require('./utils/apiError');

// Route Imports
const authRt = require('./routes/auth');
const adminRt = require('./routes/admin');
const offersRt = require('./routes/offers');
const userRoutes = require('./routes/userRoutes');
const membershipsRt = require('./routes/memberships');
const priceRoutes = require('./routes/priceRoutes');
const contactRoutes = require('./routes/contactRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

const app = express();

// Connect to MongoDB
connectDB()
  .then(() => console.log('✔ MongoDB connected'))
  .catch(err => {
    console.error('❌ DB connection error:', err);
    process.exit(1);
  });

// Middleware
app.use(cors()); // Consider specifying origin in production
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Optional for form data

// Log every request
app.use((req, res, next) => {
  console.log(`📥 ${req.method} ${req.url}`);
  next();
});

// Serve static files like images, screenshots
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// API Routes
app.use('/api/auth', authRt);
app.use('/api/admin', adminRt);
app.use('/api/offers', offersRt);
app.use('/api/users', userRoutes);
app.use('/api/memberships', membershipsRt);
app.use('/api/prices', priceRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/payments', paymentRoutes);

// 404 Handler
app.use((req, res, next) => {
  next(new ApiError(404, `Route ${req.originalUrl} not found`));
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('🌐 Global error:', err);
  res.status(err.statusCode || 500).json({
    success: false,
    error: err.message || 'Internal Server Error',
  });
});

// Start the server on port 4000
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
