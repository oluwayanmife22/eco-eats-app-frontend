import React, { useState } from 'react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Header = () => {
  const [hideLeft, setHideLeft] = useState("-left-[1000px]");
  const menuItems = ["recipes", "resources", "about", "contact"];
  const newLogo = "/logo.svg.webp"; // Correct path from public folder

  const onOpen = () => {
    setHideLeft("left-0");
  };

  const onClose = () => {
    setHideLeft("-left-[1000px]");
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div className="max-[900px]:hidden">
        <DesktopNav menuItems={menuItems} logo={newLogo} />
      </div>

      {/* Mobile Navigation */}
      <div className="min-[900px]:hidden">
        <MobileNav
          menuItems={menuItems}
          logo={newLogo}
          onClose={onClose}
          hideLeft={hideLeft}
          onOpen={onOpen}
        />
      </div>
    </>
  );
};

export default Header;
