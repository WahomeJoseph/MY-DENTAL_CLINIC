import {Appointment} from '../../../admin/server/models/AppointmentModel.js';
// Get all appointments
export const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find ();
    return res.json (appointments);
  } catch (error) {
    return res.status (500).json ({message: error.message});
  }
};

//  Update an Appointment
export const updateAppointment = async (req, res) => {
  const {id} = req.params;
  // const {fname,gender,age,IDNO,email,phone,address,date,time,service,payment} = re.body
  try {
    const updatedAppointment = await Book.findByIdAndUpdate (id, {
      fname,
      gender,
      age,
      IDNO,
      email,
      phone,
      address,
      date,
      time,
      service,
      payment,
    });
    if (!updatedAppointment) {
      return res.status (404).json ({message: 'Appointment not found'});
    }
    return res.status (200).json (updatedAppointment);
  } catch (error) {
    return res.status (500).json ({message: error.message});
  }
};

// Delete an appointment
export const deleteAppointment = async (req, res) => {
  const {id} = req.params;
  try {
    const deletedAppointment = await Book.findByIdAndDelete (id);

    if (!deletedAppointment) {
      return res.status (404).json ({message: 'Appointment not found!'});
    }
    res.status (200).json ({message: 'Appointment deleted successfully!'});
  } catch (error) {
    res.status (500).json ({message: error.message});
  }
};
