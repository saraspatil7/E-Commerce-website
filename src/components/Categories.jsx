import React from "react";
import {
  FaLaptop,
  FaMobileAlt,
  FaHeadphones,
  FaGamepad,
  FaCamera,
  FaClock,
} from "react-icons/fa";

function Categories() {
  const data = [
    {
      icon: <FaLaptop />,
      title: "Laptops",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobiles",
    },
    {
      icon: <FaHeadphones />,
      title: "Headphones",
    },
    {
      icon: <FaGamepad />,
      title: "Gaming",
    },
    {
      icon: <FaCamera />,
      title: "Cameras",
    },
  ];

  return (
    <section className="categories">
      <div className="section-title">
        <span>TOP COLLECTION</span>
        <h2>Browse Categories</h2>
      </div>

      <div className="category-grid">
        {data.map((item, index) => (
          <div className="category-card" key={index}>
            <div className="category-icon">{item.icon}</div>

            <h3>{item.title}</h3>

            <p>Explore premium quality devices.</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;