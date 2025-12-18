import React from "react";
import "./Services.css";
import {
  FaHotel,
  FaIndustry,
  FaHospitalSymbol,
  FaUniversity,
  FaHome,
  FaTshirt,
} from "react-icons/fa";

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="services-inner">
        <h2>Our Services</h2>
        <p className="services-sub">
          Comprehensive laundry solutions tailored for every sector
        </p>

        <div className="services-grid">
          <div className="service-item">
            <FaHotel className="service-icon" />
            <h3>Hotel Laundry</h3>
            <p>Expert care for linens, towels, and guest uniforms used across hospitality chains.</p>
          </div>

          <div className="service-item">
            <FaHospitalSymbol className="service-icon" />
            <h3>Hospital Laundry</h3>
            <p>Hygienic cleaning process ensuring sanitized bed sheets, uniforms, and curtains.</p>
          </div>

          <div className="service-item">
            <FaIndustry className="service-icon" />
            <h3>Industrial Laundry</h3>
            <p>Heavy‑duty washing and maintenance for industrial uniforms and fabrics.</p>
          </div>

          <div className="service-item">
            <FaUniversity className="service-icon" />
            <h3>Hostel & PG Laundry</h3>
            <p>Fast, reliable laundry services for hostels, PGs, and educational institutions.</p>
          </div>

          <div className="service-item">
            <FaHome className="service-icon" />
            <h3>Residential Laundry</h3>
            <p>Regular pick‑up and delivery for homes, with superior fabric care and finishing.</p>
          </div>

          <div className="service-item">
            <FaTshirt className="service-icon" />
            <h3>Mandap & Decorator Laundry</h3>
            <p>Specialized cleaning of decor cloths and event fabrics with same‑day turnaround.</p>
          </div>
        </div>
      </div>
    </section>
  );
}