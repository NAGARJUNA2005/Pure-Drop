import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center bg-brand-blue text-white text-center px-6"
    >
      <h1 className="text-5xl font-bold mb-4">PURE DROP</h1>
      <p className="text-lg mb-8 max-w-2xl">
        Smart, sustainable, and tech-driven water purification systems designed
        for a cleaner tomorrow.
      </p>
      <a
        href="#solutions"
        className="bg-white text-brand-dark font-semibold px-6 py-3 rounded-lg hover:bg-brand-light transition"
      >
        Explore Solutions
      </a>
    </section>
  );
}
