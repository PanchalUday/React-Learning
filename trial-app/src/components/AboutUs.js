import React from 'react';
import './AboutUs.css'; // Import the CSS file for styling

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <section className="hero-section">
        <h1>About Us</h1>
        <p>Welcome to Our Company! We strive to deliver the best products and services to our customers.</p>
      </section>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>Our mission is to empower businesses with innovative solutions and create lasting impacts in the industry.</p>
      </section>

      <section className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>Chief Operating Officer</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 3" />
            <h3>Emily Johnson</h3>
            <p>Head of Marketing</p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>If you have any questions or inquiries, feel free to reach out to us at:</p>
        <p>Email: contact@ourcompany.com</p>
        <p>Phone: +1 234 567 890</p>
      </section>
    </div>
  );
};

export default AboutUs;
