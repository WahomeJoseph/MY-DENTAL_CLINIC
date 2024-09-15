import mongoose from 'mongoose';

const PatientSchema = mongoose.Schema ({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Book',
  },
  mhistory: {
    type: String,
    required: true,
  },
  cmedications: {
    type: String,
    required: true,
  },
  allergies: {
    type: String,
    required: true,
  },
  dhistory: {
    type: String,
    required: true,
  },
  diagnosis: {
    type: String,
    required: true,
  },
  treatment: {
    type: String,
    required: true,
  },
  remarks: {
    type: String,
    required: true,
  },
  cdate: {
    type: String,
    required: true,
  },
});

PatientSchema.index ({patientId: 1}, {unique: true});
export const Patients = mongoose.model ('Patients', PatientSchema);
