import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-xl font-bold mb-4 md:mb-0">
          <span className="text-red-600">ASTRA</span> PRODUCTION
        </div>
        <div className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Astra Production. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
