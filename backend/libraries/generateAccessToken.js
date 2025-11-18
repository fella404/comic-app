import jwt from "jsonwebtoken";

const generateAccessToken = (userId, userRole) => {
  const accessToken = jwt.sign(
    { userId, userRole },
    process.env.JWT_SECRET_TOKEN_KEY,
    {
      expiresIn: "3d",
    }
  );

  return accessToken;
};

export default generateAccessToken;
