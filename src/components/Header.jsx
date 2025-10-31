import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">PURE DROP</h1>
        <nav className="space-x-4">
          <a href="#about" className="hover:underline">About</a>
          <a href="#solutions" className="hover:underline">Solutions</a>
          <a href="#process" className="hover:underline">Process</a>
          <a  href="https://forms.gle/mr8dGaS6Q7C5MQ3v8"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-600 transition font-semibold"
        >
          Contact
        </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
