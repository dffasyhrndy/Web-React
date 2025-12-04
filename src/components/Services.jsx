import React from "react";

export default function Services() {
  const services = [
    { icon: "🎨", title: "UI / UX Design" },
    { icon: "💻", title: "Web Development" },
    { icon: "⚙️", title: "Automation Tools" },
    { icon: "📱", title: "Mobile UI Design" }
  ];

  return (
    <section id="services" className="section">
      <h2 className="section-title">Services 💼</h2>

      <div className="grid grid-2">
        {services.map((s, i) => (
          <div key={i} className="service-card">
            <div className="service-icon">{s.icon}</div>

            <h3 className="text-lg font-semibold">{s.title}</h3>

            <p className="opacity-60 text-sm mt-1">
              High-quality, modern & professional service.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
