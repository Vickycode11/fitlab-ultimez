const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// JWT Secret
const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey';

// Register
exports.registerUser = async (req, res) => {
  try {
    const { name, gender, email, phone, password } = req.body;

    if (!name || !gender || !email || !phone || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(409).json({ error: 'User already exists with this email' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      gender,
      email,
      phone,
      password: hashedPassword,
    });

    await user.save();
    return res.status(201).json({ message: 'User registered successfully' });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server Error' });
  }
};

// Login
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ error: 'Email and password are required' });

    const user = await User.findOne({ email });
    if (!user)
      return res.status(401).json({ error: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: '7d',
    });

    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        gender: user.gender,
        phone: user.phone
      }
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server Error' });
  }
};
