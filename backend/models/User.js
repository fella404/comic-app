import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true, // email must be unique
    lowercase: true, // lowercase must be lowercase
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    mingLength: [6, "Password must be at least 6 characters"], // pasword length must be 6 characters
  },
  role: {
    type: String,
    enum: ["admin", "reader"],
  },
});

const User = mongoose.model("User", userSchema);

export default User;
