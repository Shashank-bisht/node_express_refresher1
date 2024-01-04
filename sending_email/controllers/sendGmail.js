const nodemailer = require('nodemailer');
require('dotenv').config();

// Create a transporter using Gmail SMTP settings
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'shashankbisht53734@gmail.com',
    pass: process.env.pass,
  },
});

// Define the function to send Gmail email
const sendGmail = () => {
  // Define the email options
  const mailOptions = {
    from: 'shashankbisht53734@gmail.com',
    to: 'dsbisht30@gmail.com',
    subject: 'Test Email 2',
    text: 'This is a test email sent through Gmail using Nodemailer.',
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error.message);
    } else {
      console.log('Email sent successfully:', info.response);
      
    }
  });
};

// Export the sendGmail function
module.exports = sendGmail;
