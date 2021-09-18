import React from "react";
import {Link} from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <div className="flex-row footer-info space-evenly">
        <div className="footer-about-us flex-column align-center">
          <h2>About Us</h2>
          <p>
            In ac ex sed metus porta tempus vel vel purus. Praesent eu
            scelerisque turpis, a imperdiet ante. Interdum et malesuada fames ac
            ante ipsum primis in faucibus.
          </p>
        </div>
        <div className="flex-column align-center footer-nav-links">
          <h2>Naivgation Links</h2>
          <Link to="cats" className="footer-link-cats">
            Cats
          </Link>
          <Link to="dogs" className="footer-link-dogs">
            Dogs
          </Link>
        </div>
        <div className="footer-contact-us flex-column align-center">
          <h2>Contact Us</h2>
          <p>Email</p>
          <p>Phone</p>
        </div>
      </div>
      <small className="flex-column align-center footer-rights">
        All rights reserved
      </small>
    </div>
  );
}
