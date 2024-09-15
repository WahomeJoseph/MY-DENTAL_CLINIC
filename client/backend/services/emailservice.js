import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config ();

const myemail = process.env.sender_email;
const mypassword = process.env.application_password;

if (!myemail || !mypassword) {
  console.log (
    'Please set the environment variables: sender_email, application_password'
  );
}

// Nodemailer configuration
export const sendMail = (to, subject, text) => {
  return new Promise ((resolve, reject) => {
    const transporter = nodemailer.createTransport ({
      host: `smtp.gmail.com`,
      secure: false,
      auth: {
        user: myemail,
        pass: mypassword,
      },
    });

    const mail_configs = {
      from: myemail,
      to: to,
      subject: subject,
      text: text,
    };

    transporter.sendMail (mail_configs, (error, info) => {
      if (error) {
        console.log (error);
        return reject ({message: 'Email not sent!', error});
      }
      return resolve ({message: 'Email sent successfully!', info});
    });
  });
};

sendMail ();
