import mongoose from 'mongoose';
import {Book} from '../models/bookModel.js';
// Reschedule an appointment

export const getPatientAppointment = async (req, res) => {
  try {
    const patientAppointment = await Book.find ();
    if (!patientAppointment) {
      return res
        .status (204)
        .json ({message: 'Patient Appointment not Found!'});
    }
    return res
      .status (200)
      .json ({message: 'Patient Appointment Found!', patientAppointment});
  } catch (error) {
    return res.status (500).json ({message: error.message});
  }
};
export const rescheduleAppointment = async (req, res) => {
  try {
    const {appointmentId} = req.params;
    const {date, time} = req.body;
    if (!mongoose.Types.ObjectId.isValid (appointmentId)) {
      return res.status (400).json ({message: 'Invalid appointment ID'});
    }

    const appointment = await Book.findByIdAndUpdate (appointmentId);
         
    if (!appointment) {
      return res.status (404).json ({message: 'Appointment not found!'});
    }
    appointment.date = date;
    appointment.time = time;
    appointment.status = 'rescheduled';

    await appointment.save ();
    return res.status (200).json ({message: 'Appointment rescheduled successfully!', appointment});
  } catch (error) {
    return res.status (500).json ({message: error.message});
  }
};

// Cancel an appointment
export const cancelAppointment = async (req, res) => {
  try {
    const {appointmentId} = req.params;

if (!mongoose.Types.ObjectId.isValid(appointmentId)) {
    return res.status(400).json({ message: 'Invalid appointment ID' });
  }

    const appointment = await Book.findByIdAndDelete ({appointmentId});
    if (!appointment) {
      return res.status (404).json ({message: 'Appointment not found!'});
    }

    appointment.status = 'cancelled';
    await appointment.save ();
    return res
      .status (200)
      .json ({message: 'Appointment cancelled successfully!', appointment});
  } catch (error) {
    return res.status (500).json ({message: error.message});
  }
};
