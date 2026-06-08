import React from "react";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <span className="tag">NEXT GEN TECHNOLOGY</span>

        <h1>
          Experience The Future
          <br />
          Of Smart Electronics
        </h1>

        <p>
          Premium gadgets, ultra-fast devices, gaming accessories,
          smart wearables and futuristic electronics for modern lifestyles.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Shop Now</button>
          <button className="secondary-btn">View Collection</button>
        </div>

        <div className="hero-stats">
          <div>
            <h2>10K+</h2>
            <p>Happy Customers</p>
          </div>

          <div>
            <h2>500+</h2>
            <p>Premium Products</p>
          </div>

          <div>
            <h2>4.9★</h2>
            <p>Top Ratings</p>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
          alt="electronics"
        />
      </div>
    </section>
  );
}

export default Hero;