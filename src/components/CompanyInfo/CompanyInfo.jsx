import React from "react";
import "./CompanyInfo.css";
import { FaBuilding, FaUserTie, FaUsers, FaMoneyBillWave, FaUniversity, FaIdCard } from "react-icons/fa";

export default function CompanyInfo() {
  return (
    <section id="info" className="company-info">
      <div className="info-inner">
        <h2>Company Information</h2>
        <p className="info-sub">Key facts about Phoenix Laundry</p>

        <div className="info-table">
          <div className="info-row">
            <div className="info-col">
              <FaBuilding className="info-icon" />
              <span className="label">Year Established</span>
              <span className="value">2011</span>
            </div>
            <div className="info-col">
              <FaUserTie className="info-icon" />
              <span className="label">Owner</span>
              <span className="value">Vishal Kakade</span>
            </div>
          </div>

          <div className="info-row">
            <div className="info-col">
              <FaUsers className="info-icon" />
              <span className="label">Number of Employees</span>
              <span className="value">26 – 50 People</span>
            </div>
            <div className="info-col">
              <FaMoneyBillWave className="info-icon" />
              <span className="label">Annual Turnover</span>
              <span className="value">₹ 40 L – ₹ 1.5 Cr</span>
            </div>
          </div>

          <div className="info-row">
            <div className="info-col">
              <FaIdCard className="info-icon" />
              <span className="label">GST Number</span>
              <span className="value">27AYIPK3697H1ZX</span>
            </div>
            <div className="info-col">
              <FaUniversity className="info-icon" />
              <span className="label">Bank</span>
              <span className="value">Axis Bank</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}