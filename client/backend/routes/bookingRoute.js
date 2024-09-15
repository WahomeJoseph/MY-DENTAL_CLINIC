import express from 'express'
import bookingController from '../controllers/bookingController.js'

const bookingRouter = express.Router();

bookingRouter.post('/book', bookingController)

export default bookingRouter