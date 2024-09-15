import express from 'express'
import forgotController from '../controllers/forgotController.js';

const forgotRouter = express.Router();

forgotRouter.post('/forgot_password', forgotController);

export default forgotRouter;