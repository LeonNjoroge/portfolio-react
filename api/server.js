const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require('dotenv').config();

const admin_user = process.env.EMAIL_USER;
const admin_pass = process.env.EMAIL_PASS;


// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running on port 5000"));


const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: admin_user,
    pass: admin_pass
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = `${req.body.firstName} + " " + ${req.body.lastName}`;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const owner_mail = {
    from: name,
    to: admin_user,
    subject: "Contact Form Submission - Portfolio",
    html: `<p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };
  const user_mail = {
    from: name,
    to: email,
    subject: "Thank You for Reaching Out!",
    html: `<p>Hi ${name},</p>
    <p>Thank you for your message. I have received your contact details, and I'll get back to you soon. Concerning:</p>
    <p><strong>Your Message:</strong></p>
    <i>${message}</i>
    <p>Best regards,</p>
    <p>Leon Creates</p>
  `,
  };
  contactEmail.sendMail(user_mail, (error) => {
    if (error) {
      return res.json({ code: 500, status: 'Error sending confirmation email', error });
    }

    // Send the email to the site owner
    contactEmail.sendMail(owner_mail, (error) => {
      if (error) {
        return res.json({ code: 500, status: 'Error sending owner email', error });
      }
      // Both emails sent successfully
      res.json({ code: 200, status: 'Message Sent' });
    });
  });
  
});
