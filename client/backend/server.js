import express, {response} from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import {sendSMS} from './services/twilioservices.js';
// import {sendMail} from './services/emailservice.js';
import registerRouter from './routes/registerRoute.js';
import bookingRouter from './routes/bookingRoute.js';
import {loginRouter} from './routes/loginRoute.js';
import mpesaRouter from './routes/mpesaRoute.js';
import manRouter from './routes/ManageRoute.js';
import {protectedRouter} from './routes/ProtectedRoute.js';

// Middleware
const app = express ();
app.use (express.json ());
app.use (cors ());
app.use (bodyParser.json ());

// connect to mongodb
mongoose
  .connect (
    'mongodb+srv://Enameldb:iF3W4Fko1Bud8Z27@cluster0.vpewssk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then (() => {
    console.log ('Connected to db successfully!');
    app.listen (8080, () => {
      console.log (`Locked!Running on http://localhost:8080`);
    });
  })
  .catch (() => {
    console.log ('Connection failed!');
  });

app.get ('/', (req, res) => {
  res.send ('Waiting........!!');
});

// Route to call the email function
// app.get ('/sendMail', async (req, res) => {
//   const {name} = req.query;
//   sendMail (name)
//     .then (response => res.send (response.message))
//     .catch (error => res.status (500).json ({message: error.message}));
// });

app.get ('/sendSMS', async (req, res) => {
  const {name} = req.query;
  sendSMS (name)
    .then (response => res.send (response.message))
    .catch (error => res.status (500).json ({message: error.message}));
});

// Routers
app.use (registerRouter);
app.use (loginRouter);
app.use (bookingRouter);
app.use (mpesaRouter);
app.use (manRouter);
app.use (protectedRouter);
