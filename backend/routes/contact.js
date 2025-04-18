const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use other services like 'Outlook', 'Yahoo', etc.
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS  // Your email password or app-specific password
  }
});

// POST /api/contact - send a contact form message
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Please provide name, email, and message' });
    }
    
    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender address (your email)
      to: 'tahmid.s.chowdhury@gmail.com', // Recipient address (your email to receive messages)
      replyTo: email, // Set reply-to as the sender's email
      subject: `Portfolio Contact: ${subject || 'New message from your portfolio'}`,
      html: `
        <h3>You have a new message from your portfolio website</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    };
    
    // Send email
    await transporter.sendMail(mailOptions);
    
    // Log it for debugging
    console.log('Email sent successfully to:', mailOptions.to);
    
    res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (err) {
    console.error('Contact form error:', err);
    res.status(500).json({ error: 'Failed to send message. Please try again later.' });
  }
});

module.exports = router;