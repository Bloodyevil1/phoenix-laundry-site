import React from "react";
import "./Infrastructure.css";
import img1 from "../../assets/infrastructure1.jpg";
import img2 from "../../assets/infrastructure2.jpg";
import img3 from "../../assets/infrastructure3.jpg";
import img4 from "../../assets/infrastructure4.jpg";
import { FaWarehouse, FaTruck, FaClock, FaMagic } from "react-icons/fa";

export default function Infrastructure() {
  return (
    <section id="infrastructure" className="infra">
      <div className="infra-inner">
        <h2>Our Infrastructure</h2>
        <p className="infra-sub">
          Modern facilities equipped with the latest technology
        </p>

        <div className="infra-grid">
          <div className="infra-images">
            <img src={img1} alt="Industrial laundry area" />
            <img src={img2} alt="Large washing machines" />
            <img src={img3} alt="Steam press and garment area" />
            <img src={img4} alt="Steam press and garment area" />
          </div>

          <ul className="infra-list">
            <li><FaWarehouse className="infra-icon" /> 7000 sq ft state‑of‑the‑art facility</li>
            <li><FaMagic className="infra-icon" /> Johnson Diversey premium chemicals</li>
            <li><FaClock className="infra-icon" /> 24‑Hour service availability</li>
            <li><FaTruck className="infra-icon" /> 7 Delivery vehicles for prompt service</li>
            <li><FaMagic className="infra-icon" /> Professional Steam Press equipment</li>
            <li><FaWarehouse className="infra-icon" /> Advanced industrial washing machines</li>
          </ul>
        </div>
      </div>
    </section>
  );
}