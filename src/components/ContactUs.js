import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Replace these with your EmailJS credentials
    const SERVICE_ID = 'service_utv5mkf';
    const TEMPLATE_ID = 'template_xovgebg';
    const USER_ID = 'LTiem5uD8FjCdaq1K';

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
      .then(() => {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        setError('Failed to send message. Please try again later.');
      });
  };

  return (
    <section
      id="contact"
      tabIndex={-1}
      className="contact-us section-offset"
      style={{
        padding: '4rem 1rem',
        maxWidth: '600px',
        margin: '0 auto 4rem',
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        fontSize: '1.125rem',
        color: '#4b5563',
        lineHeight: '1.7',
      }}
    >
      <h2
        style={{
          fontSize: '2.5rem',
          marginBottom: '2rem',
          fontWeight: '700',
          color: '#1e293b',
          textAlign: 'center',
        }}
      >
        Contact Us
      </h2>

      {submitted ? (
        <p style={{ textAlign: 'center', fontSize: '1.25rem', color: '#2563eb' }}>
          Thank you for reaching out! We will get back to you soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <label htmlFor="name" style={{ fontWeight: '600', color: '#1e293b' }}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your name"
            style={{
              padding: '0.75rem',
              borderRadius: '6px',
              border: '1px solid #ccc',
              fontSize: '1rem',
            }}
          />

          <label htmlFor="email" style={{ fontWeight: '600', color: '#1e293b' }}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Your email"
            style={{
              padding: '0.75rem',
              borderRadius: '6px',
              border: '1px solid #ccc',
              fontSize: '1rem',
            }}
          />

          <label htmlFor="message" style={{ fontWeight: '600', color: '#1e293b' }}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            placeholder="Your message"
            style={{
              padding: '0.75rem',
              borderRadius: '6px',
              border: '1px solid #ccc',
              fontSize: '1rem',
              resize: 'vertical',
            }}
          />

          {error && (
            <p style={{ color: 'red', fontWeight: '600' }}>
              {error}
            </p>
          )}

          <button
            type="submit"
            style={{
              backgroundColor: '#2563eb',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '6px',
              fontWeight: '600',
              fontSize: '1rem',
              cursor: 'pointer',
              border: 'none',
              transition: 'background-color 0.3s ease',
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#1e40af')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#2563eb')}
          >
            Send Message
          </button>
        </form>
      )}

      <p style={{ marginTop: '2rem', textAlign: 'center', color: '#4b5563' }}>
        Or email us directly at:{' '}
        <a href="mailto:kingravin001@gmail.com" style={{ color: '#2563eb' }}>
          Use message box
        </a>
      </p>
    </section>
  );
};

export default ContactUs;
