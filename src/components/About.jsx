import React from "react";
import serviceImg from "../assets/Highlights/serv1.jpg";
const About = () => {
  const services = [
    {
      title: "Digital Marketing",
      description:
        "Comprehensive online marketing strategies including social media, email, and performance marketing to grow your business.",
      icon: "📊",
    },
    {
      title: "SEO Services",
      description:
        "Technical, on-page, and off-page SEO to improve your search rankings and drive organic traffic.",
      icon: "🔍",
    },
    {
      title: "Video Production",
      description:
        "High-quality video production for commercials, social media, and corporate communications.",
      icon: "🎥",
    },
    {
      title: "Event Management",
      description:
        "End-to-end planning and execution of corporate events, launches, and experiential marketing.",
      icon: "🎪",
    },
    {
      title: "Influencer Marketing",
      description:
        "Strategic partnerships with influencers to amplify your brand message to targeted audiences.",
      icon: "🌟",
    },
    {
      title: "Content Creation",
      description:
        "Engaging written, visual, and multimedia content tailored to your brand and audience.",
      icon: "✍️",
    },
  ];

  return (
    <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
        <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        <p className="text-gray-300 mt-6 max-w-3xl mx-auto">
          We provide full-spectrum digital and creative services to elevate your
          brand in today's competitive landscape.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-800 bg-opacity-50 p-8 rounded-xl hover:bg-opacity-70 transition-all"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-bold mb-4 text-red-500">
              {service.title}
            </h3>
            <p className="text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-video bg-gray-800 rounded-xl overflow-hidden">
          <img
            src={serviceImg} // Replace with actual path
            alt="Our services in action"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6 text-red-500">
            Integrated Marketing Solutions
          </h3>
          <p className="text-gray-300 mb-4">
            We combine these services to create powerful, results-driven
            campaigns:
          </p>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Digital marketing funnels enhanced with SEO</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Event production with influencer participation</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Content strategies that work across all platforms</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Data-driven approaches for maximum ROI</span>
            </li>
          </ul>
          <button className="mt-6 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors">
            Get a Custom Proposal
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
