// routes/AppointmentRoute.js
import express from 'express';
import {
  getPatientAppointment,
  rescheduleAppointment,
  cancelAppointment,
} from '../controllers/ManageController.js';

const manRouter = express.Router ();

manRouter.get ('/patient/getAppointments', getPatientAppointment);
manRouter.put ('/reschedule/:appointmentId', rescheduleAppointment);
manRouter.put ('/cancel/:appointmentId', cancelAppointment);

export default manRouter;
