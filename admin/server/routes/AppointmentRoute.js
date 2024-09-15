import express from 'express'
import { getAppointments, updateAppointment, deleteAppointment } from '../controllers/AppointmentController.js'

const AppointmentRouter = express.Router()

AppointmentRouter.get('/appointments', getAppointments);
AppointmentRouter.put('/update', updateAppointment);
AppointmentRouter.delete('/delete', deleteAppointment);

export default AppointmentRouter