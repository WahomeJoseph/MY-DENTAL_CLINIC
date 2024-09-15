import express from 'express';
import {verifyToken} from '../middleware/Auth.js';
export const protectedRouter = express.Router ();
protectedRouter.get ('/', verifyToken, (req, res) => {
  res.status (200).json ({message: 'Route Accessed!'});
});
