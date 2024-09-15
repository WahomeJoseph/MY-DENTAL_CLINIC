import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  const token = req.header ('Authorization');
  if (!token) {
    return res.status (401).json ({message: 'Access denied!'});
  }
  try {
    const decoded = jwt.verify (token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next ();
  } catch (error) {
    console.log ('Invalid token!');
    res.status (403).json ({error: 'Invalid Token!'});
  }
};
