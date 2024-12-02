import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
  return jwt.sign(
    { 
      id: user._id, 
      email: user.email, 
      type: user.type 
    }, 
    process.env.JWT_SECRET, 
    { expiresIn: '1d' }
  );
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return null;
  }
};