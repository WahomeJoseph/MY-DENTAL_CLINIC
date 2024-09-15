import {Book} from '../../../client/backend/models/bookModel.js';
import {Patients} from '../models/AddPatientsModel.js';

const createPatient = async (req, res) => {
  try {
    const {
      fname,
      DOB,
      gender,
      email,
      phone,
      address,
      mhistory,
      cmedications,
      allergies,
      dhistory,
      diagnosis,
      treatment,
      remarks,
      cdate,
    } = req.body;

    if (!fname) {
      return res.status (400).json ({message: 'Name cannot be empty!'});
    }
    if (!DOB) {
      return res.status (400).json ({message: 'DOB cannot be empty!'});
    }
    if (!gender) {
      return res.status (400).json ({message: 'Gender cannot be empty!'});
    }
    if (!email) {
      return res.status (400).json ({message: 'Email cannot be empty!'});
    }
    if (!phone) {
      return res.status (400).json ({message: 'Phone cannot be empty!'});
    }
    if (!address) {
      return res.status (400).json ({message: 'Address cannot be empty!'});
    }
    if (!mhistory) {
      return res
        .status (400)
        .json ({message: 'Medical History cannot be empty!'});
    }
    if (!cmedications) {
      return res
        .status (400)
        .json ({message: 'Current Medications cannot be empty!'});
    }
    if (!allergies) {
      return res.status (400).json ({message: 'Allergies cannot be empty!'});
    }
    if (!dhistory) {
      return res
        .status (400)
        .send ({message: 'Dental History cannot be empty'});
    }
    if (!diagnosis) {
      return res.status (400).send ({message: 'Diagnosis cannot be empty'});
    }
    if (!treatment) {
      return res.status (400).send ({message: 'Treatment cannot be empty'});
    }
    if (!cdate) {
      return res.status (400).send ({message: 'Clinic date cannot be empty'});
    }
    if (!remarks) {
      return res.status (400).send ({message: 'Remarks cannot be empty'});
    }

    const patientExist = await Book.findOne({email});
    if (!patientExist) {
      return res.status (404).json ({message: 'Patient not found!'});
    }

    const patientId = req.params.patientId;
    const NewPatient = new Patients ({
      patientId: patientId._id,
      mhistory,
      cmedications,
      allergies,
      dhistory,
      diagnosis,
      treatment,
      remarks,
      cdate,
    });
    await NewPatient.save ();

    return res.status (200).json ({message: 'Patient records successful!'});
  } catch (error) {
    return res.status (500).json ({message: error.message});
  }
};

const getPatient = async () => {
  try {
    const patient = await Patients.findById (req.params.id)
      .populate('patientId')
      .exec ();
    if (!patient) {
      return res.status (404).json ({message: 'Patient not found!'});
    }
    return res.status (200).json (patient);
  } catch (error) {
    return res.status (500).json ({message: error.message});
  }
};

export {createPatient, getPatient};
