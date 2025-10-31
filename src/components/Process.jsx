import React from "react";

export default function Process() {
  return (
    <section id="process" className="py-20 px-10 bg-brand-light text-center">
      <h2 className="text-3xl font-bold text-brand-dark mb-8">How PURE DROP Works</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <img src="/src/assets/water-process.png" alt="Water Process" className="w-80" />
        <ul className="text-left space-y-4 max-w-md">
          <li>💧 Multi-stage RO + UV + Activated Carbon filtration.</li>
          <li>📱 IoT integration for real-time TDS and pH monitoring.</li>
          <li>⚙️ Predictive maintenance using AI diagnostics.</li>
          <li>🌱 Water-efficient systems that reduce waste by up to 70%.</li>
        </ul>
      </div>
    </section>
  );
}
