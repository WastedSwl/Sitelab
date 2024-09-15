import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Button, Form } from 'react-bootstrap';
import './ContactForm.css'; // Для кастомных стилей

const ContactForm = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const toggleFormVisibility = () => {
    setFormVisible(!formVisible);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7jhjidi', 'template_scxjj64', e.target, 'i9DWFNKWCpdKJ8bNs')
      .then((result) => {
        console.log('Email sent:', result.text);
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        setFormVisible(false); // Скрываем форму после отправки
      })
      .catch((error) => {
        console.error('Error sending email:', error.text);
        alert('Failed to send message. Please try again later.');
      });
  };

  return (
    <div className="contact-container">
      <div className={`contact-form-popup ${formVisible ? 'show' : ''}`}>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <div className="form-actions">
            <Button variant="primary" type="submit">
              Send
            </Button>
            <Button variant="secondary" onClick={toggleFormVisibility}>
              Cancel
            </Button>
          </div>
        </Form>
      </div>

      <Button
        className={`contact-button ${formVisible ? 'hide' : 'show'}`}
        variant="primary"
        onClick={toggleFormVisibility}
      >
        Contact Us
      </Button>
    </div>
  );
};

export default ContactForm;
