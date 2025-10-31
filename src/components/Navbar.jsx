import React from "react";
export default function Navbar() {
  return <header style={{ padding: "20px", background: "#0099ff", color: "white" }}>PURE DROP 💧</header>;
}

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 bg-brand-blue text-white shadow-md fixed top-0 z-50">
      <div className="flex items-center space-x-2">
        <img src="/src/assets/logo.png" alt="PURE DROP Logo" className="w-10" />
        <h1 className="text-xl font-semibold tracking-wide">PURE DROP</h1>
      </div>
      <div className="hidden md:flex space-x-8">
        <a href="#about" className="hover:underline">About</a>
        <a href="#process" className="hover:underline">Technology</a>
        <a href="#solutions" className="hover:underline">Solutions</a>
        <a href="#csr" className="hover:underline">CSR</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </div>
    </nav>
  );
}