import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaLinkedin, FaGithub, FaSkype, FaWhatsapp, 
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane 
} from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '7426848e-8259-41ed-9c59-da1749f8fc54',
          ...formData
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Get In Touch</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Have a project in mind? Let's work together!
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="contact-info-section"
          >
            <div className="contact-details">
              <div className="contact-detail-item">
                <FaPhone className="detail-icon" />
                <div>
                  <h4>Phone</h4>
                  <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
                </div>
              </div>

              <div className="contact-detail-item">
                <FaEnvelope className="detail-icon" />
                <div>
                  <h4>Email</h4>
                  <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                </div>
              </div>

              <div className="contact-detail-item">
                <FaMapMarkerAlt className="detail-icon" />
                <div>
                  <h4>Location</h4>
                  <p>{personalInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h4>Connect With Me</h4>
              <div className="social-icons">
                <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub />
                </a>
                <a href={personalInfo.social.skype} target="_blank" rel="noopener noreferrer" aria-label="Skype">
                  <FaSkype />
                </a>
                <a href={personalInfo.social.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <FaWhatsapp />
                </a>
                <a href={`mailto:${personalInfo.email}`} aria-label="Email">
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email *"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message *"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : (
                <>
                  <FaPaperPlane /> Send Message
                </>
              )}
            </button>

            {submitStatus === 'success' && (
              <p className="submit-message success">Message sent successfully! I'll get back to you soon.</p>
            )}
            {submitStatus === 'error' && (
              <p className="submit-message error">Oops! Something went wrong. Please try again.</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
