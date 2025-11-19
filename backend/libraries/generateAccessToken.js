import jwt from "jsonwebtoken";

const generateAccessToken = (userId) => {
  const accessToken = jwt.sign({ userId }, process.env.JWT_SECRET_TOKEN_KEY, {
    expiresIn: "3d",
  });

  return accessToken;
};

export default generateAccessToken;
