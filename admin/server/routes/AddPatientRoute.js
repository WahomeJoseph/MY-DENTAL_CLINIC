import express from 'express';
import {
  createPatient,
  getPatient,
} from '../controllers/AddPatientsController.js';

const PatientRouter = express.Router ();

PatientRouter.post ('/patients', createPatient);
PatientRouter.get ('/patients/:id', getPatient);

export default PatientRouter;
