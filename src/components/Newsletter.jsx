import React from "react";

function Newsletter() {
  return (
    <section className="newsletter">
      <h2>Subscribe For Latest Updates</h2>

      <p>
        Get notified about upcoming gadgets, launches and exclusive offers.
      </p>

      <div className="newsletter-box">
        <input type="email" placeholder="Enter your email" />

        <button className="primary-btn">Subscribe</button>
      </div>
    </section>
  );
}

export default Newsletter;