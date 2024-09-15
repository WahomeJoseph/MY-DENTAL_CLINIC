import mongoose from 'mongoose';
import {v4 as uuidv4} from 'uuid';

const BookSchema = mongoose.Schema ({
  appointmentId: {
    type: String,
    default: uuidv4,
    unique: true,
  },
  fname: String,
  gender: String,
  age: Number,
  IDNO: Number,
  email: String,
  phone: Number,
  address: String,
  date: Date,
  time: String,
  service: String,
  payment: String,
  status: {
    type: String,
    enum: ['scheduled', 'rescheduled', 'cancelled'],
    default: 'scheduled',
  },
});

export const Book = mongoose.model ('Book', BookSchema);
