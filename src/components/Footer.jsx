import React from 'react'
import SocialLinks from "./SocialLinks";

function Footer() {
  return (
    <footer className="footer">
      <SocialLinks />
      <p>© {new Date().getFullYear()} Gloria Eve. All rights reserved.</p>
    </footer>
  );
}

export default Footer
