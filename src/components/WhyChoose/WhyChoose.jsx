import React from "react";
import "./WhyChoose.css";
import { FaClock, FaShieldAlt, FaUsers, FaRupeeSign } from "react-icons/fa";

export default function WhyChoose() {
  return (
    <section id="why" className="why">
      <div className="why-inner">
        <h2>Why Choose Phoenix Laundry?</h2>
        <p className="why-sub">
          Your trusted partner for professional laundry services
        </p>

        <div className="why-grid">
          {/* --- Feature 1 --- */}
          <div className="why-item">
            <div className="why-icon-wrap">
              <FaClock className="why-icon" />
            </div>
            <h3>On‑Time Delivery</h3>
            <p>
              Timely pickup and delivery guaranteed with our fleet of seven
              vehicles ensuring punctual service every time.
            </p>
          </div>

          {/* --- Feature 2 --- */}
          <div className="why-item">
            <div className="why-icon-wrap">
              <FaShieldAlt className="why-icon" />
            </div>
            <h3>Quality Assured</h3>
            <p>
              We use premium Johnson Diversey cleaning agents to maintain
              top‑tier fabric care and hygiene standards.
            </p>
          </div>

          {/* --- Feature 3 --- */}
          <div className="why-item">
            <div className="why-icon-wrap">
              <FaUsers className="why-icon" />
            </div>
            <h3>Experienced Team</h3>
            <p>
              Our team of 26–50 trained professionals handles every garment
              with precision and consistent excellence.
            </p>
          </div>

          {/* --- Feature 4 --- */}
          <div className="why-item">
            <div className="why-icon-wrap">
              <FaRupeeSign className="why-icon" />
            </div>
            <h3>Affordable Rates</h3>
            <p>
              Get premium‑quality laundry service at transparent prices without
              compromising on reliability or results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}