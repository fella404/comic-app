import bcrypt from "bcryptjs";

import User from "../models/User.js";

import emailValidator from "../libraries/emailValidator.js";
import generateAccessToken from "../libraries/generateAccessToken.js";
import setCookie from "../libraries/setCookie.js";

// Register controller
export const register = async (req, res) => {
  // get body request
  const { name, email, password } = req.body;

  // check if password length less than 6
  if (password.length < 6) {
    return res
      .status(400)
      .json({ message: "Password must be at least 6 characters" });
  }

  // input validation
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    /**
     * Email format validation
     * Returns true for correct email format, false for incorrect format
     *
     * Examples:
     * - "example@gmail.com" → true
     * - "example@.com" → false
     * - "@gmail.com" → false
     * - "example@gmail" → false
     */
    const isEmailValid = emailValidator(email);

    if (!isEmailValid) {
      return res.status(400).json({ message: "Invalid email format address" });
    }

    // Return true if email exist, false if not
    const isEmailExist = await User.findOne({ email });

    if (isEmailExist) {
      return res.status(400).json({ message: "Email already exist" });
    }

    // Hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create User collection
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error in register controller: " + error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};
// Login controller
export const login = async (req, res) => {
  // get body request
  const { email, password } = req.body;

  // input validation
  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    /**
     * Email format validation
     * Returns true for correct email format, false for incorrect format
     *
     * Examples:
     * - "example@gmail.com" → true
     * - "example@.com" → false
     * - "@gmail.com" → false
     * - "example@gmail" → false
     */
    const isEmailValid = emailValidator(email);

    if (!isEmailValid) {
      return res.status(400).json({ message: "Invalid email format address" });
    }

    // Return true if email exist, false if not
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Return true if password match, false if not
    const comparePassword = await bcrypt.compare(password, user.password);

    if (!comparePassword) {
      return res.status(400).json({ message: "Wrong password" });
    }

    // generate accessToken for secure auth
    const accessToken = generateAccessToken(user._id, user.role);
    setCookie(res, accessToken);

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  } catch (error) {
    console.error("Error in login controller: " + error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};
// Logout controller
export const logout = async (req, res) => {
  // clear cookie
  res.clearCookie("accessToken");
  res.json({ message: "Logged out successfully" });
};
