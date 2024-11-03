
const express = require('express');
const router = express.Router();
const transporter = require('../transporter');

router.post('/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Tous les champs sont requis.' });
  }

  const mailOptions = {
    from: `"${name}" <${email}>`, 
    to: 'mrgenkis@gmail.com', 
    subject: subject,
    text: message,
    html: `<p>${message}</p>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
      return res.status(500).json({ error: 'Erreur lors de l\'envoi du message. Veuillez réessayer plus tard.' });
    }
    res.status(200).json({ message: 'Votre message a été envoyé avec succès.' });
  });
});

module.exports = router;
