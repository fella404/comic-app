import jwt from "jsonwebtoken";

import User from "../models/User.js";

export const protectedRoute = async (req, res, next) => {
  // get accessToken from cookie
  const { accessToken } = req.cookies;

  // check if access token is available
  if (!accessToken) {
    return res
      .status(401)
      .json({ message: "Unauthorized - No access token provided" });
  }

  try {
    // decoded access token to get stored information such as userId
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET_TOKEN_KEY);
    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // store user to req object for next middleware
    req.user = user;
    next();
  } catch (error) {
    // Check error if access token expired
    if (error.name === "TokenExpiredError") {
      return res
        .status(401)
        .json({ message: "Unauthorized - Access token expired" });
    }

    console.error("Error in authMiddleware: " + error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const adminRoute = async (req, res, next) => {
  if (req.user && req.user.role === "admin") { // if user is admin, go to the next middleware/controller
    next();
  } else {
    res.status(401).json({ message: "Access Denied - Admin Only" }); // if not, send this response
  }
};
