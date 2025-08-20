import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "super-secret-jwt-key";

// Payload can be anything you want to include (usually user ID)
export const generateToken = (payload: { userId: string }) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" }); // token expires in 1 hour
};

// Verify token
export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return null;
  }
};
