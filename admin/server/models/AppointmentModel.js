import mongoose from 'mongoose';

const AppointmentSchema = mongoose.Schema ({
  fname: {
    type: String,
    required: [true, 'Enter your name'],
  },
  gender: {
    type: String,
    required: [true, 'Select your gender'],
  },
  age: {
    type: Number,
    required: [true, 'Enter your age'],
  },
  IDNO: {
    type: Number,
    unique: true,
    required: [true, 'Enter your ID number'],
  },
  email: {
    type: String,
    required: [true, 'Enter your email'],
  },
  phone: {
    type: String,
    unique: true,
    required: [true, 'Enter your phone number'],
  },
  address: {
    type: String,
    required: [true, 'Enter your address'],
  },
  date: {
    type: String,
    required: [true, 'Enter date for the appointment'],
  },
  time: {
    type: String,
    required: [true, 'Enter time for appointment'],
  },
  service: {
    type: String,
    required: [true, 'Enter the service you seek'],
  },
  payment: {
    type: String,
    required: [true, 'Enter your mode of payment'],
  },
});

export const Appointment = mongoose.model ('Book', AppointmentSchema);
