import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // email must be unique
      lowercase: true, // lowercase must be lowercase
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "reader"],
      default: "reader",
    },
    profile: {
      avatar: {
        type: String,
        default: "",
      },
      bio: {
        type: String,
        default: "",
        maxLength: [500, "Bio must not exceed 500 characters"],
      },
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
