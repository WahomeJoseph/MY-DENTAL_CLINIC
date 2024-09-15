import {User} from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config ();
const loginController = async (req, res) => {
  try {
    const {email, password} = req.body;
    if (!email) {
      return res.status (400).json ({message: 'Email cannot be empty!'});
    }
    if (!password) {
      return res.status (400).json ({message: 'Password cannot be empty!'});
    }

    const user = await User.findOne ({email});
    if (!user) {
      return res.status (400).json ({message: 'Authentication failed!'});
    }

    const hashed_password = await bcrypt.hash (password, 10);
    if (!hashed_password) {
      return res.status (500).json ({message: 'Error hashing the password!'});
    }

    const password_match = bcrypt.compareSync (password, user.password);
    if (!password_match) {
      return res
        .status (401)
        .json ({message: 'You have entered wrong credentials!'});
    }

    const token = jwt.sign ({userId: user._id}, process.env.JWT_SECRET, {
      expiresIn: '1m',
    });
    res.status (200).json ({token, message: 'Login successful!'});
  } catch (error) {
    res.status (500).json ({error: 'Login failed! Please try again'});
  }
};

export default loginController;
