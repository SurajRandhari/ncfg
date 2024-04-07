import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactTwo = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track form submission

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSubmitting) return; // Prevent multiple submissions

    setIsSubmitting(true); // Set submitting state to true

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_mhoywhr';
    const templateId = 'template_a9zbrtn';
    const publicKey = 'AoM48ab1vlSNiJeVY';

    // Create a new object that contains dynamic template params
    const templateParams = {
      user_name: name,
      user_email: email,
      phone: 'Web Wizard',
      message: message,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      })
      .finally(() => {
        setIsSubmitting(false); // Reset submitting state after submission
      });
  };

  return (
    <form onSubmit={handleSubmit} className='emailForm'>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        cols="30"
        rows="10"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit" disabled={isSubmitting}>Send Email</button> {/* Disable button while submitting */}
    </form>
  );
};

export default ContactTwo;
