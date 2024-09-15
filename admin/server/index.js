import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import PatientRouter from './routes/AddPatientRoute.js';
import AppointmentRouter from './routes/AppointmentRoute.js';

const app = express ();
app.use (express.json ());
app.use (cors ());

// connect to mongodb
mongoose
  .connect (
    'mongodb+srv://Enameldb:iF3W4Fko1Bud8Z27@cluster0.vpewssk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then (() => {
    console.log ('Database connected Successfully! For the admin end.');
    app.listen (2700, () => {
      console.log ('Server is running on http://localhost:2700');
    });
  })
  .catch (() => {
    console.log ('Connection failed!');
  });

app.get ('/', (req, res) => {
  res.send ('Welcome the admin!!');
});
// Error handling middleware
app.use ((err, req, res, next) => {
  console.error (err.stack);
  res.status (500).json ({message: 'Internal Server Error'});
});

// Routers
app.use (PatientRouter);
app.use (AppointmentRouter);
