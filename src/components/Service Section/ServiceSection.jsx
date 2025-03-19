export default function ServicesSection() {
  const services = [
    { title: "Pharmaceutical Consultation", description: "Expert advice on drug usage." },
    { title: "Blood Pressure Measurement", description: "Free blood pressure check services." },
    { title: "Rare Drug Procurement", description: "Ordering and supplying rare drugs." },
  ];

  return (
    <section id="services" className="py-16 px-6 md:px-8 bg-primary">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-teal-500">{service.title}</h3>
              <p className="text-gray-600 text-base md:text-lg">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
