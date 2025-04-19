import { HiBars3BottomRight } from "react-icons/hi2";
import { RiCloseCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const MobileNav = ({ menuItems, logo, onClose, hideLeft, onOpen }) => {
  return (
    <div className="h-16 flex justify-between items-center px-6 lg:px-12">
      <a href="/">
        <img src={logo} alt="logo" className="w-32 h-auto" />
      </a>

      <button onClick={onOpen} className="border border-primary rounded">
        <HiBars3BottomRight className="w-7 h-7" />
      </button>

      {/* Slide-out menu */}
      <div
        className={`transition-all w-full h-full fixed bg-primary z-50 top-0 ${hideLeft} flex justify-center items-center`}
      >
        <button onClick={onClose} className="absolute right-8 top-32">
          <RiCloseCircleLine className="w-7 h-7" />
        </button>

        <div>
          <ul className="flex flex-col gap-5">
            {Array.isArray(menuItems) &&
              menuItems.map((menu, index) => (
                <li key={index}>
                  <Link
                    to={`/${menu}`}
                    className="font-medium capitalize text-secondary text-2xl"
                  >
                    {menu}
                  </Link>
                </li>
              ))}
          </ul>

          {/* Login and Sign Up buttons */}
          <ul className="flex items-center gap-4 font-medium mt-10">
            <li>
              <button className="text-secondary px-4 rounded border">
                Log In
              </button>
            </li>

            <li>
              <button className="text-secondary px-4 rounded border">
                Sign up
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// 🔥 This is the missing line
export default MobileNav;
