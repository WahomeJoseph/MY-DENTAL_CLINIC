import {User} from '../models/userModel.js';
import bcrypt from 'bcrypt';
const registerController = async (req, res) => {
  try {
    const {username, email, password, confirm_password} = req.body;

    if (!username)
      return res.status (400).json ({message: 'Name cannot be empty!'});
    if (!email)
      return res.status (400).json ({message: 'Email cannot be empty!'});
    if (!password)
      return res.status (400).json ({message: 'Password cannot be empty!'});
    if (!confirm_password)
      return res.status (400).json ({message: 'Password confirmation cannot be empty!'});
    if (password !== confirm_password) {
      return res (400).json ({message: 'The password must match!'});
    }
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
    if (!passwordRegex.test (password)) {
      return res.status (400).json ({
        message: 'Password should contain at least 8 characters, uppercase and lowercase letters, digit and a special character!',
      });
    }

    const userExist = await User.findOne ({email});
    if (userExist) {
      return res
        .status (400)
        .json ({message: 'User already exist.Proceed to Login!'});
    }

    const hashed_password = await bcrypt.hash (password, 10);
    if (!hashed_password) {
      return res.status(500).json({message: 'Error decrypting the password!'})
    }
    const newUser = new User ({username, email, password: hashed_password});
    await newUser.save ();

    res.status (201).json ({message: 'Registration successful!'});
  } catch (error) {
    res.status (500).json ({error: 'Registration failed!'});
  }
};

export default registerController;
