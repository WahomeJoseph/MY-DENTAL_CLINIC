import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config ();

let token = '';
export const createToken = async (req, res, next) => {
  const consumerKey = process.env.MPESA_CONSUMER_KEY;
  const consumerSecret = process.env.MPESA_SECRET_KEY;

  const auth = new Buffer.from (`${consumerKey}:${consumerSecret}`).toString (
    'base64'
  );
  await axios
    .get (
      ' https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
      {
        headers: {
          authorization: `Basic ${auth}`,
        },
      }
    )
    .then (data => {
      token = data.data.access_token;
      console.log (data.data);
      next ();
    })
    .catch (error => {
      console.log (error);
      res.status (400).json (error.message);
    });
};
// console.log (createToken);
export const stkPush = async (req, res) => {
  const phone = req.body.phone;
  const amount = req.body.amount;
  const shortcode = process.env.MPESA_SHORTCODE;
  const passKey = process.env.MPESA_PASSKEY;
  //   ('gFfP1CmbwnHavRSA41mRmBF45EUypOAVuP0N8dZ/LQcOreTT9yRLYpk4mN8Fg9GyUXFJa0JKXGUjZaAbqfFSWJ5zqpmeToLhGtAVsLqEJj11bZOZp7SfLD8eIkmmXvmWAgqNDu2eywm2kY4EP/a68pAuqo8mfLUWDqRJeZeu981ZWU7oDl+LT5tcwHgvjoZYsYXcDfruWeesdySD3ygapAD3aGMmP7T5E4l09q1zje8roaMRTX5kaDKVuUNpTvF0ugYUAQZJbjukqz4QihAbg8ZZYagoIe7l2J936sq0QLHCuQKgFLTgDLTsaCgqqGmqa5gEv+iX9mkQNzTAvFrn/w==');
  const date = new Date ();
  const timeStamp =
    date.getFullYear () +
    ('0' + (date.getMonth () + 1)).slice (-2) +
    ('0' + date.getDate ()).slice (-2) +
    ('0' + date.getHours ()).slice (-2) +
    ('0' + date.getMinutes ()).slice (-2) +
    ('0' + date.getSeconds ()).slice (-2);

  const password = new Buffer.from (shortcode + passKey + timeStamp).toString (
    'base64'
  );
  const url = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';

  const data = {
    BusinessShortCode: shortcode,
    Password: password,
    Timestamp: timeStamp,
    TransactionType: 'CustomerPayBillOnline',
    Amount: amount,
    PartyA: phone,
    PartyB: shortcode,
    PhoneNumber: phone,
    CallBackURL: 'https://mydomain.com/path', // *********************
    AccountReference: 'Test',
    TransactionDesc: 'Test',
  };

  await axios
    .post (url, data, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    .then (data => {
      console.log ('Token: ' + token);
      // console.log (data);
      res.status (200).json (data.data);
    })
    .catch (error => {
      console.log (error);
      res.status (400).json (error.message);
    });
};
