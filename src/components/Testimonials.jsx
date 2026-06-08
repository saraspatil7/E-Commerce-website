import React from "react";

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="section-title">
        <span>TESTIMONIALS</span>
        <h2>What Our Customers Say</h2>
      </div>

      <div className="testimonial-grid">
        <div className="testimonial-card">
          <p>
            Amazing shopping experience with premium quality products
            and super fast delivery.
          </p>

          <h4>HRUDAY GAWAD</h4>
        </div>

        <div className="testimonial-card">
          <p>
            The UI feels futuristic and the products are absolutely top class.
          </p>

          <h4>AARYAN NIJAI</h4>
        </div>

        <div className="testimonial-card">
          <p>
            Best electronics website design I have seen with smooth experience.
          </p>

          <h4>BHAVIK RAUT</h4>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;