// backend/routes/contact.js
const express = require('express');
const router = express.Router();

// POST /api/contact - send a contact form message
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Please provide name, email, and message' });
    }
    
    // Here you could:
    // 1. Store message in database (create a Message model)
    // 2. Send an email notification using a service like Nodemailer
    // 3. Connect to an external email API service
    
    // For now, we'll just log it and return success
    console.log('Contact form message received:', { name, email, subject, message });
    
    res.status(200).json({ success: true, message: 'Message received successfully' });
  } catch (err) {
    console.error('Contact form error:', err);
    res.status(500).json({ error: 'Failed to process message' });
  }
});

module.exports = router;