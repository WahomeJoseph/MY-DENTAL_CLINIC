import twilio from 'twilio';
import dotenv from 'dotenv';

dotenv.config ();
export const sendSMS = async (body, to) => {
  const client = new twilio (process.env.TWILIO_SID, process.TWILIO_AUTH_TOKEN);
  return client.messages
    .create ({
      body: body,
      from: '+19125901324',
      to: to,
    })
    .then (message => console.log (message, 'Message sent successfully!'))
    .catch (err => console.log (err, 'Message not sent!'));
};
