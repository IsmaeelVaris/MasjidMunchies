import React from "react";
import { landingPageClasses as c } from "../../styles/classes";

const Footer: React.FC = () => {
  return (
    <footer className={c.footer}>
      <p>© 2025 MasjidMunchies. All rights reserved.</p>
      <div className={c.footerIcons}>
        <span className={c.footerIcon}>Twitter</span>
        <span className={c.footerIcon}>Facebook</span>
        <span className={c.footerIcon}>Instagram</span>
      </div>
    </footer>
  );
};

export default Footer;
