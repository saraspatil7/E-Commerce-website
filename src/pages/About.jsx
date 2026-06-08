import React from "react";

function About() {
  return (
    <div className="about-page">

      {/* HERO SECTION */}

      <section className="about-hero">
        <div className="about-content">

         <span className="tag">ABOUT-US</span><h1>

             CLICK..UPGRADE..EVOLVE. 
          </h1>

          <p>
            PATIL ELECTRONICS is a next-generation electronics store
            offering premium gadgets, smart devices, gaming gear, and
            futuristic technology with a smooth shopping experience.
          </p>

          <div className="about-stats">

            <div>
              <h2>10K+</h2>
              <p>Happy Customers</p>
            </div>

            <div>
              <h2>500+</h2>
              <p>Products</p>
            </div>

            <div>
              <h2>24/7</h2>
              <p>Support</p>
            </div>

          </div>

        </div>

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2"
            alt="about electronics"
          />
        </div>
      </section>

      {/* MISSION SECTION */}

      <section className="about-mission">

        <h2>Our Mission</h2>

        <p>
          To deliver high-quality electronics at the best price with
          modern UI experience and trusted customer service.
        </p>

      </section>

    </div>
  );
}

export default About;



