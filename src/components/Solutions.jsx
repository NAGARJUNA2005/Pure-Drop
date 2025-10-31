import React from "react";

export default function SolutionsSection() {
  return (
    <section id="solutions" className="py-20 px-10 text-center bg-white">
      <h2 className="text-3xl font-bold text-brand-dark mb-8">Our Solutions</h2>
      <p className="text-gray-700 max-w-2xl mx-auto mb-12">
        We provide sustainable, scalable, and smart solutions that empower
        communities, reduce waste, and promote clean living.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-brand-light rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Water Recycling</h3>
          <p>Innovative systems to reuse greywater efficiently and safely.</p>
        </div>
        <div className="p-6 bg-brand-light rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Smart Filtration</h3>
          <p>IoT-enabled purification ensuring quality and safety in every drop.</p>
        </div>
        <div className="p-6 bg-brand-light rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Community Outreach</h3>
          <p>Partnering with local initiatives to promote water sustainability.</p>
        </div>
      </div>
    </section>
  );
}
