const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Building responsive and dynamic websites using the latest technologies.",
    icon: "🌐",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "Creating user-friendly mobile applications for iOS and Android.",
    icon: "📱",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Designing intuitive user interfaces and experiences.",
    icon: "🎨",
  },
  {
    id: 4,
    title: "SEO Optimization",
    description: "Improving website visibility on search engines.",
    icon: "🔍",
  },
  {
    id: 5,
    title: "Technical Writing",
    description: "Writing clear and concise technical documentation.",
    icon: "📝",
  },
  {
    id: 6,
    title: "Social Media Management",
    description: "Building and managing social media accounts.",
    icon: "📱",
  },
  {
    id: 7,
    title: "Video Editing",
    description: "Editing and refining videos for various purposes.",
    icon: "🎥",
  },
];
export const Services = () => {
  return (
    <section className="text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row">
        <div className="md:w-1/4 pr-8 mb-12 md:mb-0">
          <h2 className="text-6xl text-purple-300 font-extrabold sticky top-20">
            SERVICES
          </h2>
        </div>
        <div className="md:w-3/4">
          {services.map((service) => (
            <div key={service.id} className="mb-16 flex items-center ">
              <div className="text-purple-300 font-bold text-5xl mr-6 flex">
                {service.id}
              </div>
              <div className="flex-shrink-0 mr-2">
                <div className="text-4xl mb-2">{service.icon}</div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
