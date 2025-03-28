import React from "react";
import teamPic from "../assets/Highlights/serv1.jpg";
const About = () => {
  return (
    <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
        <div className="w-24 h-1 bg-red-600 mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 text-red-500">
              Production Excellence
            </h3>
            <p className="text-gray-300">
              We specialize in high-quality video production for brands and
              agencies, delivering cinematic content that tells compelling
              stories.
            </p>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 text-red-500">
              Digital Marketing & SEO
            </h3>
            <p className="text-gray-300">
              Our comprehensive digital services include technical SEO, content
              strategy, and performance analytics to ensure your content reaches
              the right audience.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-red-500">
              Integrated Solutions
            </h3>
            <p className="text-gray-300">
              We combine creative production with data-driven marketing
              strategies for campaigns that look great and perform even better.
            </p>
          </div>
        </div>

        <div className="relative aspect-video bg-gray-800 rounded-xl overflow-hidden">
          <img
            src={teamPic} // Replace with actual path
            alt="Our team at work"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
