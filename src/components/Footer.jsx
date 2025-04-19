import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-gray-100 py-20 px-4'>
      <div className='max-w-screen-xl mx-auto'>

        {/* Card-style Footer */}
        <div className='bg-white shadow-lg rounded-2xl p-10 grid grid-cols-1 md:grid-cols-3 gap-10'>

          {/* Brand / About */}
          <div>
            <h2 className='text-2xl font-bold text-btnColor mb-4'>Eco Eats</h2>
            <p className='text-sm text-gray-600'>
              Sharing plant-powered recipes and kitchen inspiration for a sustainable, nourishing lifestyle. From your pantry to your plate — Eco Eats has you covered.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className='text-lg font-semibold mb-4 text-secondary'>Quick Links</h4>
            <ul className='space-y-2 text-gray-500 text-sm'>
              <li><a href='#' className='hover:text-btnColor'>Home</a></li>
              <li><a href='#' className='hover:text-btnColor'>Recipes</a></li>
              <li><a href='#' className='hover:text-btnColor'>About</a></li>
              <li><a href='#' className='hover:text-btnColor'>Contact</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className='text-lg font-semibold mb-4 text-secondary'>Follow Us</h4>
            <p className='text-sm text-gray-600 mb-3'>Stay connected for fresh updates and food fun.</p>
            <div className='flex gap-4 text-xl text-gray-500'>
              <a href='#' className='hover:text-btnColor'><FaFacebookF /></a>
              <a href='#' className='hover:text-btnColor'><FaInstagram /></a>
              <a href='#' className='hover:text-btnColor'><FaTwitter /></a>
              <a href='#' className='hover:text-btnColor'><FaYoutube /></a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className='mt-12 text-center text-sm text-gray-500'>
          © {new Date().getFullYear()} Eco Eats. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
