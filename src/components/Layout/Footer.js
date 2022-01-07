import React from "react";
import FooterItem from "./FooterItem";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">Avenue</div>
      <FooterItem title="Store Information">
        <div>Terms of Use</div>
        <div>Privacy Policy</div>
        <div>FAQs</div>
      </FooterItem>
      <FooterItem title="Customer Care">
        <div>Terms of Use</div>
        <div>Privacy Policy</div>
        <div>FAQs</div>
      </FooterItem>
      <FooterItem title="Follow Us">
        <div>Facebook</div>
        <div>Instagram</div>
        <div>Twitter</div>
      </FooterItem>
    </div>
  );
}

export default Footer;
