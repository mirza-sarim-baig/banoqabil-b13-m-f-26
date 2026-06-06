import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-3 bg-white border border-gray-200 rounded-full shadow-sm">
      {/* Left Section */}
      <div className="flex items-center gap-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold">
            ✦
          </div>
          <span className="text-sm font-semibold text-gray-900">Nucleus</span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-500">
          <a href="#" className="hover:text-black transition">
            Work
          </a>
          <a href="#" className="hover:text-black transition">
            About
          </a>
          <a href="#" className="hover:text-black transition">
            Playground
          </a>
          <a href="#" className="hover:text-black transition">
            Resources
          </a>
        </div>
      </div>

      {/* Right Button */}
      <button className="px-4 py-2 text-sm font-medium bg-blue-500 text-white rounded-full hover:bg-blue-800 transition">
        hello@nucleus.com
      </button>
    </nav>
  );
};

export default Navbar;
