import bcrypt from "bcryptjs";

import User from "../models/User.js";
import emailValidator from "../libraries/emailValidator.js";

// Register controller
export const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (password.length < 6) {
    return res
      .status(400)
      .json({ message: "Password must be at least 6 characters" });
  }

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const isEmailValid = emailValidator(email);

    if (!isEmailValid) {
      return res.status(400).json({ message: "Invalid email address" });
    }

    const isEmailExist = await User.findOne({ email });
    console.log(isEmailExist);
    if (isEmailExist) {
      return res.status(400).json({ message: "Email already exist" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error in register controller: " + error.message);
    res.status(500).json({ message: error.message || "Something went wrong" });
  }
};
// Login controller
export const login = async (req, res) => {};
// Logout controller
export const logout = async (req, res) => {};
