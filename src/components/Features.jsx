import React from "react";
import {
  FaTruck,
  FaShieldAlt,
  FaUndo,
  FaHeadset,
} from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaTruck />,
      title: "Free Shipping",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Payment",
    },
    {
      icon: <FaUndo />,
      title: "Easy Returns",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
    },
  ];

  return (
    <section className="features">
      {features.map((feature, index) => (
        <div className="feature-card" key={index}>
          <div className="feature-icon">{feature.icon}</div>

          <h3>{feature.title}</h3>
        </div>
      ))}
    </section>
  );
}

export default Features;