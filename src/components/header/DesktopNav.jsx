import React from 'react';
import { Link } from 'react-router-dom';

const DesktopNav = ({ menuItems, logo }) => {
  return (
    <div className="h-16 flex justify-between items-center px-6 lg:px-12">
      {/* Using Link for the logo */}
      <Link to="/">
      <img 
  src={logo} 
  alt="logo" 
  className="w-24 md:w-28 mt-2 md:mt-4" 
/>

      </Link>

      {/* Menu items */}
      <ul className="flex gap-6">
        {menuItems.map((menu, index) => (
          <li key={index}>
            <Link to={`/${menu}`} className="font-medium capitalize text-secondary">
              {menu}
            </Link>
          </li>
        ))}
      </ul>

      {/* Login and Sign Up buttons */}
      <ul className="flex items-center gap-4 font-medium">
        <li>
          <button className="text-secondary px-4 rounded">Log In</button>
        </li>

        <li>
          <button className="text-secondary px-4 rounded">Sign up</button>
        </li>
      </ul>
    </div>
  );
};

export default DesktopNav;
