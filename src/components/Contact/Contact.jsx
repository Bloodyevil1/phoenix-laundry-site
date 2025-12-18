import React from "react";
import "./Contact.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-inner">
        <h2>Get In Touch</h2>
        <p className="contact-sub">
          Reach out to us for professional laundry solutions
        </p>

        <div className="contact-grid">
          {/* ------- Left: Contact Details ------- */}
          <div className="contact-details">
            <div className="contact-line">
              <FaMapMarkerAlt className="contact-icon" />
              <p>
                Mhetre Wasti, Chikhli, Pune – 411062,
                <br />
                Maharashtra (IN)
              </p>
            </div>
            <div className="contact-line">
              <FaPhoneAlt className="contact-icon" />
              <p>+91 99223 23636</p>
            </div>
            <div className="contact-line">
              <FaEnvelope className="contact-icon" />
              <p>phoenixlaundrys@gmail.com</p>
            </div>
            <iframe
              title="Phoenix Laundry Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.923536985398!2d73.82736427503039!3d18.62641836678261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c8b8c2c1d8cd%3A0x67a54bdb46d6a3ad!2sChikhli%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1686903010000!5m2!1sen!2sin"
              loading="lazy"
            ></iframe>
          </div>

          {/* ------- Right: Message Form ------- */}
          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent! Thank you for contacting Phoenix Laundry.");
            }}
          >
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea
              rows="5"
              placeholder="Tell us about your laundry requirements..."
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}