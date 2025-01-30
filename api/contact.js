const nodemailer = require("nodemailer");
require("dotenv").config();

const admin_user = process.env.EMAIL_USER;
const admin_pass = process.env.EMAIL_PASS;

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

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { firstName, lastName, email, message, phone } = req.body;

    const name = `${firstName} ${lastName}`;
    const owner_mail = {
      from: name,
      to: admin_user,
      subject: "Contact Form Submission - Portfolio",
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    const user_mail = {
      from: name,
      to: email,
      subject: "Thank You for Reaching Out!",
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for your message. I have received your contact details, and I'll get back to you soon. Concerning:</p>
        <p><strong>Your Message:</strong></p>
        <i>${message}</i>
        <p>Best regards,</p>
        <p>Leon Creates</p>
      `,
    };

    try {
      // Send the confirmation email to the user
      await contactEmail.sendMail(user_mail);

      // Send the email to the site owner
      await contactEmail.sendMail(owner_mail);

      // Both emails sent successfully
      res.status(200).json({ code: 200, status: 'Message Sent' });
    } catch (error) {
      // Handle errors during the mail sending process
      console.error(error);
      res.status(500).json({ code: 500, status: 'Error sending email', error });
    }
  } else {
    // Handle invalid request methods (only POST allowed)
    res.status(405).json({ message: "Method Not Allowed" });
  }
}