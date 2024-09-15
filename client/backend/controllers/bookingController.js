import {Book} from '../models/bookModel.js';
import { Appointment } from '../../../admin/server/models/AppointmentModel.js';
// import {sendSMS} from '../services/twilioservices.js';
// import cron from 'node-cron';

const bookingController = async (req, res) => {
  try {
    const {
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
    } = req.body;

    if (!fname) {
      return res.status (400).json ({message: 'Name cannot be empty!'});
    }

    if (!gender) {
      return res.status (400).json ({message: 'Gender cannot be empty!'});
    }

    if (!age) {
      return res.status (400).json ({message: 'Age cannot be empty!'});
    }

    if (!IDNO) {
      return res.status (400).json ({message: 'ID NO cannot be empty!'});
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

    if (!date) {
      return res.status (400).json ({message: 'Date cannot be empty!'});
    }

    if (!time) {
      return res.status (400).json ({message: 'Time cannot be empty!'});
    }

    if (!service) {
      return res.status (400).json ({message: 'Service cannot be empty!'});
    }
    if (!payment) {
      return res.status (400).send ({message: 'Payment cannot be empty'});
    }

    const NewBook = new Book ({
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
    await NewBook.save ();

    const NewAppointment = new Appointment ({
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
    })
    await NewAppointment.save()

    // const message = `Dear ${Book.fname}, your appointment is confirmed for ${Book.date} at ${Book.time}`;
    // await sendSMS (Book.phone, message);

    // await sendMail (
    //   email,
    //   'Appointment Confirmed',
    //   `Dear ${fname}, your appointment is confirmed for ${date} at ${time}.`
    // );

    // schedule a reminder email for the next day at 9:00 AM
    cron.schedule ('0 9 * * 1-5', async () => {
      const Book = await Book.find ({
        date: {$req: new Date ().toISOString ().split ('T')[0]},
      });
      Book.forEach (async Book => {
        const message = `Reminder: Yo have an appointment today at ${Book.time}.`;
        await sendSMS (Book.phone, message);
      });
      // sendMail (
      //   email,
      //   'Daily Appointment Reminder!',
      //   `Dear ${fname}, your appointment is scheduled for ${date} at ${time}.`
      // );
    });

    return res.status (200).json ({
      message: 'Appointment successfully booked!',
      // appointmentId: book.appointmentId,
    });
  } catch (error) {
    console.error ('Error in your controller', error);
    return res.status (500).json ({message: error.message});
  }
};

export default bookingController;
