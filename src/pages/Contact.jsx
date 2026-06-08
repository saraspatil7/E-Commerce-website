import React from "react";

function Contact() {
  return (
    <section className="advanced-contact-section">
      {/* Decorative blurred background shapes */}
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>
      
      <div className="advanced-contact-container">
        
        {/* Left Side: Contact Information */}
        <div className="contact-info-panel">
          <div className="header-content">
            <span className="premium-badge">GET IN TOUCH</span>
            <h2>Let's Connect</h2>
            <p>Have a question or want to work together? We'd love to hear from you.</p>
          </div>

          <div className="info-cards-vertical">
            <div className="info-card">
              <div className="icon-glass">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div className="info-details">
                <h3>Email Us</h3>
                <p>patilelectronics@gmail.com</p>
              </div>
            </div>

            <div className="info-card">
              <div className="icon-glass">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div className="info-details">
                <h3>Call Us</h3>
                <p>+91 9876543210</p>
              </div>
            </div>

            <div className="info-card">
              <div className="icon-glass">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div className="info-details">
                <h3>Visit Us</h3>
                <p>Mumbai, Maharashtra, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="contact-form-panel">
          <form className="glass-form" onSubmit={(e) => e.preventDefault()}>
            <h3>Send a Message</h3>
            
            <div className="input-group">
              <input type="text" id="name" required placeholder=" " />
              <label htmlFor="name">Full Name</label>
            </div>
            
            <div className="input-group">
              <input type="email" id="email" required placeholder=" " />
              <label htmlFor="email">Email Address</label>
            </div>
            
            <div className="input-group">
              <textarea id="message" rows="4" required placeholder=" "></textarea>
              <label htmlFor="message">Your Message</label>
            </div>
            
            <button type="submit" className="submit-btn">
              <span>Send Message</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;