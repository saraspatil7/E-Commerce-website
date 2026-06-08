import React from "react";
import { Link } from "react-router-dom"; 

function Home() {
  return (
    <div className="home">

      {/* --- HERO SECTION --- */}
      {/* Alignment Fix: hero-left and hero-right are now direct children of the hero section */}
      <section className="hero">
        <div className="hero-overlay"></div>

        {/* LEFT SIDE: Text and Buttons */}
        <div className="hero-left">
          <span className="hero-tag">NEXT GEN TECHNOLOGY</span>
          
          <h1>
            Experience The Future
            <br />
            Of Smart Electronics
          </h1>
          
          <p>
            Discover premium gadgets, gaming accessories,
            smart devices and futuristic electronics
            designed for modern lifestyles.
          </p>
          
          <div className="hero-buttons">
            <button className="primary-btn">
              Shop Now
            </button>
            <button className="secondary-btn">
              Explore Collection
            </button>
          </div>
          
          <div className="hero-stats">
            <div className="stat-card">
              <h2>10K+</h2>
              <span>Happy Customers</span>
            </div>
            <div className="stat-card">
              <h2>500+</h2>
              <span>Premium Products</span>
            </div>
            <div className="stat-card">
              <h2>4.9★</h2>
              <span>Customer Rating</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Image */}
        <div className="hero-right">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
            alt="Premium futuristic electronics layout"
          />
        </div>
      </section>

      {/* --- CATEGORIES SECTION --- */}
      <section className="categories">
        <div className="section-title">
          <span>TOP COLLECTION</span>
          <h2>Browse Categories</h2>
          <p>Explore premium quality electronic devices and futuristic gadgets.</p>
        </div>

        <div className="category-grid">
          <div className="category-card">
            <div className="category-image">
              <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853" alt="Laptop" />
            </div>
            <h3>Laptops</h3>
            <p>High performance laptops for gaming, coding and professional work.</p>
          </div>

          <div className="category-card">
            <div className="category-image">
              <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" alt="Mobile" />
            </div>
            <h3>Mobiles</h3>
            <p>Latest flagship smartphones with premium performance and cameras.</p>
          </div>

          <div className="category-card">
            <div className="category-image">
              <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e" alt="Headphones" />
            </div>
            <h3>Headphones</h3>
            <p>Experience immersive sound quality with premium wireless headphones.</p>
          </div>

          <div className="category-card">
            <div className="category-image">
              <img src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3" alt="Gaming" />
            </div>
            <h3>Gaming</h3>
            <p>Gaming consoles and accessories for ultimate gaming experience.</p>
          </div>
        </div>
      </section>

      {/* --- FEATURES SECTION --- */}
      <section className="features">
        <div className="section-title">
          <span>WHY CHOOSE US</span>
          <h2>Premium Services</h2>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>Free Shipping</h3>
            <p>Fast and secure delivery across India.</p>
          </div>

          <div className="feature-card">
            <h3>Secure Payment</h3>
            <p>100% secure payment gateway protection.</p>
          </div>

          <div className="feature-card">
            <h3>Easy Returns</h3>
            <p>Hassle-free replacement and return policy.</p>
          </div>

          <div className="feature-card">
            <h3>24/7 Support</h3>
            <p>Dedicated customer support anytime.</p>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS SECTION --- */}
      <section className="testimonials">
        <div className="section-title">
          <span>TESTIMONIALS</span>
          <h2>What Customers Say</h2>
        </div>

        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>Amazing shopping experience with premium quality products and super fast delivery service.</p>
            <h4>BHAVIK RAUT </h4>
          </div>

          <div className="testimonial-card">
            <p>Best electronics website design with smooth and futuristic UI.</p>
            <h4>HRUDAY GAWAD </h4>
          </div>

          <div className="testimonial-card">
            <p>Top class gadgets with excellent customer support experience.</p>
            <h4>AARYAN NIJAI</h4>
          </div>
        </div>
      </section>

      {/* --- NEWSLETTER SECTION --- */}
      <section className="newsletter">
        <div className="newsletter-content">
          <h2>Subscribe For Latest Updates</h2>
          <p>Get notified about new gadgets, exclusive offers and upcoming launches.</p>
          
          <div className="newsletter-box">
            <input
              type="email"
              placeholder="Enter your email"
            />
            <button className="primary-btn">
              Subscribe
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;