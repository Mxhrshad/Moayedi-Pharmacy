export default function ServicesSection(){
    const services = [
      { title: 'Pharmaceutical Consultation', description: 'Expert advice on drug usage.' },
      { title: 'Blood Pressure Measurement', description: 'Free blood pressure check services.' },
      { title: 'Rare Drug Procurement', description: 'Ordering and supplying rare drugs.' },
    ];
  
    return (
      <section id="services" className="py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <h3 className="text-xl font-semibold mb-4 text-teal-500">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };