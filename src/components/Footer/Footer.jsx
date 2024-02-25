import React from "react";

import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <img src="/images/footer.jpg" alt="footer" className="footer__image" />

      <div className="contact">
        <h1 className="big-text">Contact</h1>

        <ul className="contact__list">
          <li>
            <p className="bold">Contact us</p>
            <a href="mailto:hello@peam-design.de" className="secondary">
              hello@peam-design.de
            </a>
            <a href="tel:+49 (0) 8175-97 91 977">+49 (0) 8175-97 91 977</a>
          </li>
          <li>
            <p className="bold">Visit us</p>
            <p>
              .PEAM Showroom
              <br />
              Söckinger Straße 1, 82319 Starnberg
              <br />
              Open by appointment
            </p>
          </li>
          <li>
            <p className="bold">
              Follow us
            </p>
            <a href="https://www.instagram.com/peam_design/" className="secondary">Instagram</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
