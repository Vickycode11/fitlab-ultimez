const mongoose = require('mongoose');

// Fix deprecation warning
mongoose.set('strictQuery', true);

module.exports = function connectDB() {
  return mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
