
import React, { useState } from 'react';
import './styles/ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError('');
    setStatus('');

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('Veuillez remplir tous les champs.');
      return;
    }


fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })  
      .then((response) => {
        if (response.ok) {
          setStatus('Votre message a été envoyé avec succès !');
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
        } else {
          return response.json().then((data) => {
            throw new Error(data.error || 'Une erreur est survenue. Veuillez réessayer.');
          });
        }
      })
      .catch((error) => {
        console.error('Erreur lors de l\'envoi du message :', error);
        setError(error.message || 'Une erreur est survenue. Veuillez réessayer.');
      });
  };

  return (
    <div className="contact-form-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Nom :
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email :
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Objet :
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Message :
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Envoyer</button>
        {error && <p className="form-error">{error}</p>}
        {status && <p className="form-success">{status}</p>}
      </form>
    </div>
  );
}

export default ContactForm;
